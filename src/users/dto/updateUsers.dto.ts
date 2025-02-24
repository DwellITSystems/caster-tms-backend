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
    @IsString()
    password: string;

    @IsOptional()
    @IsString()
    mfaSecret: string;

    @IsOptional()
    @IsString()
    isMfaEnabled: string;
}