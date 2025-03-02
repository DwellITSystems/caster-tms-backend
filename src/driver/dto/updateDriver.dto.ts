import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

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

    @IsOptional()
    @IsString()
    licence: string;

    @IsOptional()
    @IsString()
    phoneNumber: string;

    @IsOptional()
    @IsNumber()
    driverBatta?: number;

    @IsOptional()
    @IsNumber()
    driverAdvance?: number;

    @IsOptional()
    @IsNumber()
    driverBataBalance?: number;
}