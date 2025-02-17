import { IsBoolean, IsNotEmpty, IsOptional, IsString, Matches } from "class-validator";

export class updateVehicleDto {
    @IsOptional()
    @IsString()
    vehicleNo: string;

    @IsOptional()
    @IsString()
    model?: string;

    @IsOptional()
    @IsString()
    year?: string;

    @IsOptional()
    @IsString()
    ownerName?: string;

    @IsOptional()
    @IsString()
    insuranceCompany?: string;

    @IsOptional()
    @IsString()
    insuranceDueDate?: string;

    @IsOptional()
    @IsString()
    fitnessDueDate?: string;

    @IsOptional()
    @IsString()
    pollutionDueDate?: string;

    @IsOptional()
    @IsString()
    totalKM?: string;

    @IsOptional()
    @IsString()
    serviceDueDate?: string;

    @IsOptional()
    @IsString()
    tyreChangeKM?: string;

    @IsOptional()
    @IsString()
    vehicleType?: string;

    @IsOptional()
    @IsString()
    vehicleTon?: string;

    @IsString()
    bata?: string;
}