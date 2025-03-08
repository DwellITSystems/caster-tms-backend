import { Type } from "class-transformer";
import { IsArray, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, Matches, ValidateNested } from "class-validator";

class RemarkDto {
    @IsString()
    remark: string;

    @IsString()
    date: string;

    @IsString()
    user: string;
}

export class createTripDto {

    @IsOptional()
    @IsArray()
    updatePayment?: []

    @IsNotEmpty({ message: 'uniqueID is required' })
    @IsString()
    uniqueID?: string;

    @IsNotEmpty({ message: 'date is required' })
    @IsString()
    date?: string;

    @IsNotEmpty({ message: 'trip starting place is required' })
    @IsString()
    tripStartingPlace?: string;

    @IsNotEmpty({ message: 'trip ending Place is required' })
    @IsString()
    tripEndingPlace?: string;

    @IsBoolean()
    @IsOptional()
    ownVehicle?: boolean;

    @IsNotEmpty({ message: 'vehicle number is required' })
    @IsString()
    vehicleNumber?: string;

    @IsString()
    @IsOptional()
    driverId?: string;

    @IsString()
    @IsOptional()
    driverName?: string;

    @IsString()
    @IsOptional()
    driverPhoneNo?: string;

    @IsNumber({}, { message: "driverBatta must be a number" })
    @IsOptional()
    driverBatta?: number;

    @IsNumber({}, { message: "driverAdvance must be a number" })
    @IsOptional()
    driverAdvance?: number;

    @IsNumber()
    @IsOptional()
    driverBataBalance?: number;

    @IsString()
    @IsOptional()
    startingKM?: string;

    @IsNumber()
    @IsOptional()
    dieselCost?: number;

    @IsString()
    @IsOptional()
    vehicleOwnerDriverPhoneNo?: string;

    @IsString()
    @IsOptional()
    vehicleOwnerDriverName?: string;

    @IsNotEmpty({ message: 'vehicle type is required' })
    @IsString()
    vehicleType?: string;

    @IsNotEmpty({ message: 'check point charge is required' })
    @IsString()
    checkpointCharge?: string;

    @IsNotEmpty({ message: 'halt charge is required' })
    @IsString()
    haltCharge?: string;

    @IsNotEmpty({ message: 'rent is required' })
    @IsNumber()
    rent?: number;

    @IsNotEmpty({ message: 'unloading charge is required' })
    @IsString()
    unloadingCharge?: string;

    @IsNotEmpty({ message: 'commission is required' })
    @IsString()
    commission?: string;

    @IsBoolean()
    @IsOptional()
    vehicleAdvanceActive: boolean;

    @IsNotEmpty({ message: 'vehicle advance is required' })
    @IsNumber()
    vehicleAdvance?: number;

    @IsNumber()
    @IsOptional()
    vehicleBalance?: number;

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => RemarkDto)
    vehicleRemark?: RemarkDto[];

    @IsNotEmpty({ message: 'company name is required' })
    @IsString()
    companyName?: string;

    @IsOptional()
    @IsBoolean()
    lrNoActive?: boolean;

    @IsString()
    @IsOptional()
    lrno?: string;

    @IsString()
    @IsOptional()
    invoiceAmount?: string;

    @IsString()
    @IsOptional()
    gst?: string;

    @IsString()
    @IsOptional()
    fromAddress?: string;

    @IsString()
    @IsOptional()
    toAddress?: string;

    @IsString()
    @IsOptional()
    goods?: string;

    @IsNotEmpty({ message: 'weight is required' })
    @IsString()
    weight?: string;

    @IsNotEmpty({ message: 'total fright charge is required' })
    @IsString()
    totalFrightCharge?: string;

    @IsNotEmpty({ message: 'fright advance is required' })
    @IsString()
    frightAdvance?: string;

    @IsNotEmpty({ message: 'credit account is required' })
    @IsString()
    creditAccount?: string;

    @IsNotEmpty({ message: 'fright charge balance is required' })
    @IsNumber()
    frightchargebalance?: number;

    @IsNotEmpty({ message: 'bill amount is required' })
    @IsString()
    billAmount?: string;

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => RemarkDto)
    companyRemark?: RemarkDto[];

    @IsString()
    @IsOptional()
    vehiclePayment?: string;

    @IsNotEmpty({ message: 'company payment is required' })
    @IsString()
    companyPayment?: string;

    @IsOptional()
    @IsString()
    bataPayment?: string;

    @IsNotEmpty({ message: 'trip status required' })
    @IsString()
    tripStatus?: string;

    @IsNotEmpty({ message: 'trip total expence is required' })
    @IsNumber()
    tripTotalExpence?: number;

    @IsNotEmpty({ message: 'trip profit is required' })
    @IsNumber()
    tripProfit?: number;
}