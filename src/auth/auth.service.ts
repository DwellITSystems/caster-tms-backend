import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';
import * as bcrypt from 'bcryptjs';
import * as speakeasy from 'speakeasy';
import * as qrcode from 'qrcode';
import { createAuthDto } from './dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
        private jwtService: JwtService
    ) { }

    async register(dto: createAuthDto) {
        const { userName, password, phoneNumber, firstName, lastName, address, state, city, pincode, role } = dto;
        const existingUser = await this.userModel.findOne({ userName: userName }).exec();

        if (existingUser) {
            throw new ConflictException('User already exists!');
        }

        if (!password) {
            throw new Error("Password is required");
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const user = new this.userModel({
            userName: userName,
            password: hashedPassword,
            isMfaEnabled: false,
            mfaSecret: '',
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            address: address,
            state: state,
            city: city,
            pincode: pincode,
            role: role
        });

        return user.save();
    }

    async login(userDetails: { userName: string; password: string }) {

        const user = await this.userModel.findOne({ userName: userDetails.userName });

        if (!user || !user.password) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const isPasswordValid = await bcrypt.compare(userDetails.password, user.password || '');

        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid credentials');
        }

        return {
            requiresMFA: Boolean(user.mfaSecret),
            userId: user._id,
            isMfaEnabled: Boolean(user.isMfaEnabled)
        }
    }

    async setupMFA(userId: string) {
        const secret = speakeasy.generateSecret({ name: 'CASTER-TMS' });
        await this.userModel.findByIdAndUpdate(userId, { mfaSecret: secret.base32, isMfaEnabled: true });

        const otpauthUrl = secret.otpauth_url;
        const qrCode = await qrcode.toDataURL(otpauthUrl);
        return { qrCode, secret: secret.base32 };
    }

    async verifyMFA(userId: string, token: string) {
        const user = await this.userModel.findById(userId);

        if (!user || !user.mfaSecret) {
            throw new UnauthorizedException('MFA setup incomplete.');
        }

        const verified = speakeasy.totp.verify({
            secret: user.mfaSecret,
            encoding: 'base32',
            token,
            window: 1
        });


        if (!verified) throw new UnauthorizedException('Invalid MFA token');

        // Enable MFA after successful verification (first-time setup)
        if (!user.isMfaEnabled) {
            user.isMfaEnabled = true;
            await user.save();
        }

        const payload = { sub: user._id, username: user.userName };
        const accessToken = this.jwtService.sign(payload);
        const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });

        return {
            accessToken,
            refreshToken,
            user: [
                {
                    'firstName': user.firstName,
                    'lastName': user.lastName,
                    'role': user.role
                }
            ]
        };
    }
}
