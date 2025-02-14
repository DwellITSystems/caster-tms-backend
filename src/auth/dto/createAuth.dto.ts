import { IsBoolean, IsNotEmpty, IsString, Matches } from "class-validator";

export class createAuthDto {
    @IsNotEmpty({ message: 'userName is required' })
    @IsString()
    userName: string;

    @IsNotEmpty({ message: 'First name is required' })
    @IsString()
    firstName?: string;

    @IsNotEmpty({ message: 'Last name is required' })
    @IsString()
    lastName?: string;

    @IsNotEmpty({ message: 'Password is required' })
    @IsString()
    @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/, {
        message: 'Password must be at least 8 characters long and contain at least one letter, one number, and one special character',
    })
    password?: string;

    @IsNotEmpty({ message: 'Last name is required' })
    @IsString()
    phoneNumber?: string;

    @IsNotEmpty({ message: 'Address is required' })
    @IsString()
    address?: string;

    @IsNotEmpty({ message: 'Role is required' })
    @IsString()
    role?: string;

    @IsString()
    mfaSecret?: string;

    @IsBoolean()
    isMfaEnabled?: string;
}