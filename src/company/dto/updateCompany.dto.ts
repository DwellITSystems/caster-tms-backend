import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class updateCompanyDto {
    @IsOptional()
    @IsString()
    companyName: string;

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
    gstNo?: string;

    @IsOptional()
    @IsBoolean()
    contactName?: string;

    @IsNotEmpty()
    @IsString()
    mobileNumber: string;
}