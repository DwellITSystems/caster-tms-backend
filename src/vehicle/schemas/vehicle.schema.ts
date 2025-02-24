import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true
})

export class Vehicle {
    @Prop({ required: true })
    vehicleNo: string;

    @Prop({ required: true })
    model: string;

    @Prop({ required: true })
    year: string;

    @Prop({ required: true })
    ownerName: string;

    @Prop({ required: true })
    insuranceCompany: string;

    @Prop({ required: true })
    insuranceDueDate: string;

    @Prop({ required: true })
    fitnessDueDate: string;

    @Prop({ required: true })
    pollutionDueDate: string;

    @Prop({ required: true })
    totalKM: string;

    @Prop({ required: true })
    serviceDueDate: string;

    @Prop({ required: true })
    tyreChangeKM: string;

    @Prop({ required: true })
    vehicleType: string;

    @Prop({ required: true })
    vehicleTon: string;

    @Prop()
    bata?: string;

}

export const vehicleSchema = SchemaFactory.createForClass(Vehicle);