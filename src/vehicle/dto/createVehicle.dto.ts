import { IsBoolean, IsNotEmpty, IsString, Matches } from "class-validator";

export class createVehicleDto {
    @IsNotEmpty({ message: 'Vehicle No is required' })
    @IsString()
    vehicleNo: string;

    @IsNotEmpty({ message: 'Model is required' })
    @IsString()
    model?: string;

    @IsNotEmpty({ message: 'Year is required' })
    @IsString()
    year?: string;

    @IsNotEmpty({ message: 'Owner Name is required' })
    @IsString()
    ownerName?: string;

    @IsNotEmpty({ message: 'Insurance Company is required' })
    @IsString()
    insuranceCompany?: string;

    @IsNotEmpty({ message: 'Insurance DueDate is required' })
    @IsString()
    insuranceDueDate?: string;

    @IsNotEmpty({ message: 'Fitness DueDate is required' })
    @IsString()
    fitnessDueDate?: string;

    @IsNotEmpty({ message: 'Pollution DueDate is required' })
    @IsString()
    pollutionDueDate?: string;

    @IsNotEmpty({ message: 'Total KM is required' })
    @IsString()
    totalKM?: string;

    @IsNotEmpty({ message: 'Service DueDate is required' })
    @IsString()
    serviceDueDate?: string;

    @IsNotEmpty({ message: 'Tyre Change KM is required' })
    @IsString()
    tyreChangeKM?: string;

    @IsNotEmpty({ message: 'Vehicle Type is required' })
    @IsString()
    vehicleType?: string;

    @IsNotEmpty({ message: 'Vehicle Ton is required' })
    @IsString()
    vehicleTon?: string;

    @IsString()
    bata?: string;
}