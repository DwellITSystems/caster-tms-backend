import { IsBoolean, IsNotEmpty, IsString, Matches } from "class-validator";

export class createCompanyDto {
    @IsNotEmpty({ message: 'Company Name is required' })
    @IsString()
    companyName: string;

    @IsNotEmpty({ message: 'Address is required' })
    @IsString()
    address?: string;

    @IsNotEmpty({ message: 'GST Number is required' })
    @IsString()
    gstNo?: string;

    @IsNotEmpty({ message: 'Contact name is required' })
    @IsString()
    contactName?: string;

    @IsNotEmpty({ message: 'Mobile Number is required' })
    @IsString()
    mobileNumber?: string;
}