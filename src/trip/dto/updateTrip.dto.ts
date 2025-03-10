import { Type } from "class-transformer";
import { isArray, IsArray, IsBoolean, IsNumber, isNumber, IsOptional, isString, IsString, ValidateNested } from "class-validator";

class UpdatePaymentDto {
    @IsString()
    paymenttype: string;

    @IsString()
    amount: string;

    @IsString()
    remark: string;

    @IsString()
    date: string;

    @IsString()
    user: string;
}


export class updateTripDto {

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => UpdatePaymentDto)
    updatePayment?: UpdatePaymentDto[];

    @IsOptional()
    @IsString()
    date: string;

    @IsOptional()
    @IsString()
    userName: string;

    @IsOptional()
    @IsString()
    tripStartingPlace?: string;

    @IsOptional()
    @IsString()
    tripEndingPlace?: string;

    @IsBoolean()
    @IsOptional()
    ownVehicle?: boolean;

    @IsOptional()
    @IsString()
    vehicleNumber: string;

    @IsOptional()
    @IsString()
    driverId: string;

    @IsOptional()
    @IsString()
    driverName: string;

    @IsOptional()
    @IsString()
    driverPhoneNo: string;

    @IsOptional()
    @IsNumber()
    driverBatta: number;

    @IsOptional()
    @IsNumber()
    driverAdvance: number;

    @IsOptional()
    @IsNumber()
    driverBataBalance: number;

    @IsOptional()
    @IsString()
    startingKM: string;

    @IsOptional()
    @IsNumber()
    dieselCost: number;

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
    @IsNumber()
    rent: number;

    @IsOptional()
    @IsString()
    unloadingCharge?: string;

    @IsOptional()
    @IsString()
    commission?: string;

    @IsOptional()
    @IsArray()
    vehicleRemark: [];

    @IsBoolean()
    @IsOptional()
    vehicleAdvanceActive: boolean;

    @IsOptional()
    @IsNumber()
    vehicleAdvance: number;

    @IsOptional()
    @IsNumber()
    vehicleBalance: number;

    @IsOptional()
    @IsBoolean()
    lrNoActive?: boolean;

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
    @IsNumber()
    frightchargebalance: number;

    @IsOptional()
    @IsString()
    billAmount?: string;

    @IsOptional()
    @IsArray()
    companyRemark?: [];

    @IsOptional()
    @IsString()
    vehiclePayment?: string;

    @IsOptional()
    @IsString()
    companyPayment?: string;

    @IsOptional()
    @IsString()
    bataPayment?: string;

    @IsOptional()
    @IsString()
    tripStatus: string;

    @IsOptional()
    @IsNumber()
    tripTotalExpence: number;

    @IsOptional()
    @IsNumber()
    tripProfit: number;

}