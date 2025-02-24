import { IsOptional, IsString } from "class-validator";

export class updateTripDto {
    @IsOptional()
    @IsString()
    date: string;

    @IsOptional()
    @IsString()
    tripStartingPlace?: string;

    @IsOptional()
    @IsString()
    tripEndingPlace?: string;

    @IsOptional()
    @IsString()
    vehicleNumber: string;

    @IsOptional()
    @IsString()
    driverName: string;

    @IsOptional()
    @IsString()
    driverPhoneNo: string;

    @IsOptional()
    @IsString()
    driverBatta: string;

    @IsOptional()
    @IsString()
    driverAdvance: string;

    @IsOptional()
    @IsString()
    driverBataBalance: string;

    @IsOptional()
    @IsString()
    startingKM: string;

    @IsOptional()
    @IsString()
    dieselCost: string;

    @IsOptional()
    @IsString()
    vehicleOwnerDriverPhoneNo: string;

    @IsOptional()
    @IsString()
    vehicleOwnerDriverName: string;

    @IsOptional()
    @IsString()
    vehicleType: string;

    @IsOptional()
    @IsString()
    checkpointCharge: string;

    @IsOptional()
    @IsString()
    haltCharge: string;

    @IsOptional()
    @IsString()
    rent: string;

    @IsOptional()
    @IsString()
    unloadingCharge?: string;

    @IsOptional()
    @IsString()
    commission?: string;

    @IsOptional()
    @IsString()
    vehicleRemark: string;

    @IsOptional()
    @IsString()
    vehicleAdvance: string;

    @IsOptional()
    @IsString()
    vehicleBalance: string;

    @IsOptional()
    @IsString()
    lrno?: string;

    @IsOptional()
    @IsString()
    invoiceAmount?: string;

    @IsOptional()
    @IsString()
    gst?: string;

    @IsOptional()
    @IsString()
    fromAddress: string;

    @IsOptional()
    @IsString()
    toAddress: string;

    @IsOptional()
    @IsString()
    goods: string;

    @IsOptional()
    @IsString()
    weight?: string;

    @IsOptional()
    @IsString()
    totalFrightCharge?: string;

    @IsOptional()
    @IsString()
    frightAdvance: string;

    @IsOptional()
    @IsString()
    creditAccount: string;

    @IsOptional()
    @IsString()
    frightchargebalance: string;

    @IsOptional()
    @IsString()
    billAmount?: string;

    @IsOptional()
    @IsString()
    companyRemark?: string;

    @IsOptional()
    @IsString()
    tripStatus: string;

    @IsOptional()
    @IsString()
    tripTotalExpence: string;

}