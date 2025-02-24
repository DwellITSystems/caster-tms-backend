import { IsBoolean, IsNotEmpty, IsString, Matches } from "class-validator";

export class createCompanyDto {
    @IsNotEmpty({ message: 'Company Name is required' })
    @IsString()
    companyName: string;

    @IsNotEmpty({ message: 'Address is required' })
    @IsString()
    address?: string;

    @IsNotEmpty({ message: 'City is required' })
    @IsString()
    city?: string;

    @IsNotEmpty({ message: 'State is required' })
    @IsString()
    state?: string;

    @IsNotEmpty({ message: 'Pincode is required' })
    @IsString()
    pincode?: string;

    @IsNotEmpty({ message: 'GST Number is required' })
    @IsString()
    gstNo?: string;

    @IsNotEmpty({ message: 'Contact name is required' })
    @IsString()
    contactName?: string;

    @IsNotEmpty({ message: 'Phone Number is required' })
    @IsString()
    phoneNumber?: string;
}