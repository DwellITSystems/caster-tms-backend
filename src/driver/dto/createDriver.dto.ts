import { IsBoolean, IsNotEmpty, IsString, Matches } from "class-validator";

export class createDriverDto {
    @IsNotEmpty({ message: 'Name is required' })
    @IsString()
    name: string;

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

    @IsNotEmpty({ message: 'Licence is required' })
    @IsString()
    licence?: string;

    @IsNotEmpty({ message: 'Mobile Number is required' })
    @IsString()
    mobileNumber?: string;
}