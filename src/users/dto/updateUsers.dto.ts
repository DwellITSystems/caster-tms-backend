import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class updateUserDto {
    @IsOptional()
    @IsString()
    userName: string;

    @IsOptional()
    @IsString()
    firstName?: string;

    @IsOptional()
    @IsString()
    lastName?: string;

    @IsOptional()
    @IsBoolean()
    isAdmin?: boolean;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsString()
    mfaSecret: string;

    @IsNotEmpty()
    @IsString()
    isMfaEnabled: string;
}