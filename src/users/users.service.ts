import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import { updateUserDto } from './dto/updateUsers.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>
    ) { }

    async getUsers(): Promise<User | any> {
        try {
            return await this.userModel.find()
                .select("userName firstName lastName phoneNumber address role _id")
                .exec();
        } catch (error) {
            throw new ForbiddenException(error.message);
        }
    }

    async getUserById(id: string): Promise<User | null> {
        try {
            return await this.userModel.findById(id);
        } catch (error) {
            throw new ForbiddenException(error.message);
        }
    }

    async updateUser(id: string, updateUserDto: updateUserDto): Promise<User | null> {
        try {
            return await this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true });
        } catch (error) {
            throw new ForbiddenException(error.message);
        }
    }

    async deleteUser(id: string): Promise<User | null> {
        try {
            return await this.userModel.findByIdAndDelete(id);
        } catch (error) {
            throw new ForbiddenException(error.message);
        }
    }
}
