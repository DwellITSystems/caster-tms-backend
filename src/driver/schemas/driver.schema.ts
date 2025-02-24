import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true,
})
export class Driver {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    address?: string;

    @Prop({ required: true })
    city?: string;

    @Prop({ required: true })
    state?: string;

    @Prop({ required: true })
    pincode?: string;

    @Prop({ unique: true, required: true })
    licence?: string;

    @Prop({ required: true })
    phoneNumber?: string;
}

export const driverSchema = SchemaFactory.createForClass(Driver);