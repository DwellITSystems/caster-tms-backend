import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true,
})
export class Trip {
    @Prop({ required: true })
    date?: string;

    @Prop({ required: true })
    tripStartingPlace?: string;

    @Prop({ required: true })
    tripEndingPlace?: string;

    @Prop({ required: true })
    driverName?: string;

    @Prop({ required: true })
    vehicleNumber?: string;

    @Prop({ required: true })
    driverPhoneNo?: string;

    @Prop({ required: true })
    driverBatta?: string;

    @Prop({ required: true })
    driverAdvance?: string;

    @Prop({ required: true })
    driverBataBalance?: string;

    @Prop({ required: true })
    startingKM?: string;

    @Prop({ required: true })
    dieselCost: string

    @Prop({ required: true })
    vehicleOwnerDriverPhoneNo?: string;

    @Prop({ required: true })
    vehicleOwnerDriverName?: string;

    @Prop({ required: true })
    vehicleType?: string;

    @Prop({ required: true })
    checkpointCharge?: string;

    @Prop({ required: true })
    haltCharge?: string;

    @Prop({ required: true })
    rent?: string;

    @Prop({ required: true })
    unloadingCharge?: string;

    @Prop({ required: true })
    commission?: string;

    @Prop({ required: true })
    vehicleAdvance?: string;

    @Prop({ required: true })
    vehicleBalance?: string;

    @Prop({ required: true })
    vehicleRemark?: string;

    @Prop({ required: true })
    companyName?: string;

    @Prop({ required: true })
    lrno?: string;

    @Prop({ required: true })
    invoiceAmount?: string;

    @Prop({ required: true })
    gst?: string;

    @Prop({ required: true })
    fromAddress?: string;

    @Prop({ required: true })
    toAddress?: string;

    @Prop({ required: true })
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
    frightchargebalance?: string;

    @Prop({ required: true })
    billAmount?: string;

    @Prop({ required: true })
    companyRemark?: string;

    @Prop({ required: true })
    vehiclePayment?: string;

    @Prop({ required: true })
    companyPayment?: string;

    @Prop({ required: true })
    tripStatus?: string;

    @Prop({ required: true })
    tripTotalExpence?: string;

    @Prop({ required: true })
    tripProfit: string;
}

export const tripSchema = SchemaFactory.createForClass(Trip);