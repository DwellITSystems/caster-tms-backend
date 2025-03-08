import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Type } from "class-transformer";
import { IsArray, IsOptional, ValidateNested } from "class-validator";
import { Types } from "mongoose";

@Schema({
    timestamps: true,
})

export class Trip {
    @Prop({ unique: true, required: true })
    uniqueID?: string;

    @Prop({ required: true })
    date?: string;

    @Prop({ required: true })
    tripStartingPlace?: string;

    @Prop({ required: true })
    tripEndingPlace?: string;

    @Prop({ required: false })
    ownVehicle?: boolean;

    @Prop({ required: true })
    vehicleNumber?: string;

    @Prop({ required: false })
    driverId?: string;

    @Prop({ required: false })
    driverName?: string;

    @Prop({ required: false })
    driverPhoneNo?: string;

    @Prop({ required: false })
    driverBatta?: number;

    @Prop({ required: false })
    driverAdvance?: number;

    @Prop({ required: false })
    driverBataBalance?: number;

    @Prop({ required: false })
    startingKM?: string;

    @Prop({ required: false })
    dieselCost: number

    @Prop({ required: false })
    vehicleOwnerDriverPhoneNo?: string;

    @Prop({ required: false })
    vehicleOwnerDriverName?: string;

    @Prop({ required: true })
    vehicleType?: string;

    @Prop({ required: true })
    checkpointCharge?: string;

    @Prop({ required: true })
    haltCharge?: string;

    @Prop({ required: true })
    rent?: number;

    @Prop({ required: true })
    unloadingCharge?: string;

    @Prop({ required: true })
    commission?: string;

    @Prop({ required: false })
    vehicleAdvanceActive: boolean;

    @Prop({ required: true })
    vehicleAdvance?: number;

    @Prop({ required: false })
    vehicleBalance?: number;

    @Prop({ required: false })
    @Prop({ type: [{ name: String, date: Date, user: String }], default: [] })
    vehicleRemark?: { _id: Types.ObjectId; name: string; remarkdate: Date, user: string }[];

    @Prop({ required: true })
    companyName?: string;

    @Prop({ required: false })
    lrNoActive?: boolean;

    @Prop({ required: false })
    lrno?: string;

    @Prop({ required: false })
    invoiceAmount?: string;

    @Prop({ required: false })
    gst?: string;

    @Prop({ required: false })
    fromAddress?: string;

    @Prop({ required: false })
    toAddress?: string;

    @Prop({ required: false })
    goods?: string;

    @Prop({ required: true })
    weight?: string;

    @Prop({ required: true })
    totalFrightCharge?: string;

    @Prop({ required: true })
    frightAdvance?: string;

    @Prop({ required: true })
    creditAccount?: string;

    @Prop({ required: true })
    frightchargebalance?: number;

    @Prop({ required: true })
    billAmount?: string;

    @Prop({ required: false })
    @Prop({ type: [{ name: String, date: Date, user: String }], default: [] })
    companyRemark?: { _id: Types.ObjectId; name: string; remarkdate: Date, user: string }[];

    @Prop({ required: false })
    vehiclePayment?: string;

    @Prop({ required: true })
    companyPayment?: string;

    @Prop({ required: true })
    tripStatus?: string;

    @Prop({ required: false })
    bataPayment?: string;

    @Prop({ required: true })
    tripTotalExpence?: number;

    @Prop({ required: true })
    tripProfit: number;
}

export const tripSchema = SchemaFactory.createForClass(Trip);