import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true,
})
export class Company {
    @Prop({ unique: true, required: true })
    companyName: string;

    @Prop({ required: true })
    address?: string;

    @Prop({ required: true })
    city?: string;

    @Prop({ required: true })
    state?: string;

    @Prop({ required: true })
    pincode?: string;

    @Prop({ required: true })
    gstNo?: string;

    @Prop({ required: true })
    contactName?: string;

    @Prop({ required: true })
    phoneNumber?: string;
}

export const companySchema = SchemaFactory.createForClass(Company);