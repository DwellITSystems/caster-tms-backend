import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsNotEmpty } from "class-validator";

@Schema({
    timestamps: true,
})
export class User {
    @Prop({ unique: true, required: true })
    userName: string

    @Prop({ required: true })
    firstName?: string;

    @Prop({ required: true })
    lastName?: string;

    @Prop({ required: true })
    password?: string;

    @Prop({ required: true })
    phoneNumber?: string;

    @Prop({ required: true })
    address?: string;

    // @Prop({ required: true })
    // avatar?: string;

    @Prop({ required: true })
    role?: string;

    @Prop()
    mfaSecret?: string;

    @Prop({ default: false })
    isMfaEnabled: boolean;
}

export const userSchema = SchemaFactory.createForClass(User);