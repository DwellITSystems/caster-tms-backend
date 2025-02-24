import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class updateDriverDto {
    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    address?: string;

    @IsOptional()
    @IsString()
    city?: string;

    @IsOptional()
    @IsString()
    state?: string;

    @IsOptional()
    @IsString()
    pincode?: string;

    @IsNotEmpty()
    @IsString()
    licence: string;

    @IsNotEmpty()
    @IsString()
    phoneNumber: string;
}