import { IsBoolean, IsNotEmpty, IsString, Matches } from "class-validator";

export class createTripDto {
    @IsNotEmpty({ message: 'Date is required' })
    @IsString()
    date: string;

    @IsNotEmpty({ message: 'Trip starting place is required' })
    @IsString()
    tripStartingPlace?: string;

    @IsNotEmpty({ message: 'Trip ending Place is required' })
    @IsString()
    tripEndingPlace?: string;

    @IsNotEmpty({ message: 'vehicle number is required' })
    @IsString()
    vehicleNumber?: string;

    @IsNotEmpty({ message: 'Last name is required' })
    @IsString()
    driverName: string;

    @IsNotEmpty({ message: 'Last name is required' })
    @IsString()
    driverPhoneNo: string;

    @IsNotEmpty({ message: 'Last name is required' })
    @IsString()
    driverBatta: string;

    @IsNotEmpty({ message: 'Last name is required' })
    @IsString()
    driverAdvance: string;

    @IsNotEmpty({ message: 'Last name is required' })
    @IsString()
    driverBataBalance: string;

    @IsNotEmpty({ message: 'Last name is required' })
    @IsString()
    startingKM: string;

    @IsNotEmpty({ message: 'Last name is required' })
    @IsString()
    dieselCost: string;

    @IsNotEmpty({ message: 'Last name is required' })
    @IsString()
    vehicleOwnerDriverPhoneNo?: string;

    @IsNotEmpty({ message: 'First name is required' })
    @IsString()
    vehicleOwnerDriverName?: string;

    @IsNotEmpty({ message: 'Last name is required' })
    @IsString()
    vehicleType?: string;

    @IsNotEmpty({ message: 'First name is required' })
    @IsString()
    checkpointCharge?: string;

    @IsNotEmpty({ message: 'Last name is required' })
    @IsString()
    haltCharge?: string;

    @IsNotEmpty({ message: 'First name is required' })
    @IsString()
    rent?: string;

    @IsNotEmpty({ message: 'Last name is required' })
    @IsString()
    unloadingCharge?: string;

    @IsNotEmpty({ message: 'First name is required' })
    @IsString()
    commission?: string;

    @IsNotEmpty({ message: 'Last name is required' })
    @IsString()
    vehicleAdvance?: string;

    @IsNotEmpty({ message: 'First name is required' })
    @IsString()
    vehicleBalance?: string;

    @IsNotEmpty({ message: 'Last name is required' })
    @IsString()
    vehicleRemark?: string;

    @IsNotEmpty({ message: 'First name is required' })
    @IsString()
    companyName?: string;

    @IsNotEmpty({ message: 'Last name is required' })
    @IsString()
    lrno?: string;

    @IsNotEmpty({ message: 'Last name is required' })
    @IsString()
    invoiceAmount?: string;

    @IsNotEmpty({ message: 'Last name is required' })
    @IsString()
    gst?: string;

    @IsNotEmpty({ message: 'Last name is required' })
    @IsString()
    fromAddress?: string;

    @IsNotEmpty({ message: 'Last name is required' })
    @IsString()
    toAddress?: string;

    @IsNotEmpty({ message: 'Last name is required' })
    @IsString()
    goods?: string;

    @IsNotEmpty({ message: 'Mobile Number is required' })
    @IsString()
    weight?: string;

    @IsNotEmpty({ message: 'Address is required' })
    @IsString()
    totalFrightCharge?: string;

    @IsNotEmpty({ message: 'State is required' })
    @IsString()
    frightAdvance?: string;

    @IsNotEmpty({ message: 'City is required' })
    @IsString()
    creditAccount?: string;

    @IsNotEmpty({ message: 'Pincode is required' })
    @IsString()
    frightchargebalance?: string;

    @IsNotEmpty({ message: 'Role is required' })
    @IsString()
    billAmount?: string;

    @IsNotEmpty({ message: 'Role is required' })
    @IsString()
    companyRemark?: string;

    @IsNotEmpty({ message: 'Role is required' })
    @IsString()
    vehiclePayment?: string;

    @IsNotEmpty({ message: 'Role is required' })
    @IsString()
    companyPayment?: string;

    @IsNotEmpty({ message: 'Role is required' })
    @IsString()
    tripStatus?: string;

    @IsNotEmpty({ message: 'Role is required' })
    @IsString()
    tripTotalExpence?: string;

    @IsNotEmpty({ message: 'Role is required' })
    @IsString()
    tripProfit?: string;
}