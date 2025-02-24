import { ConflictException, ForbiddenException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Driver } from './schemas/driver.schema';
import { InjectModel } from '@nestjs/mongoose';
import { createDriverDto } from './dto';

@Injectable()
export class DriverService {
    constructor(
        @InjectModel(Driver.name)
        private driverModel: Model<Driver>
    ) { }

    async createDriver(dto: createDriverDto) {
        const {
            name,
            address,
            city,
            state,
            pincode,
            licence,
            phoneNumber
        } = dto;
        const existingCompany = await this.driverModel.findOne({ licence: licence }).exec();

        if (existingCompany) {
            throw new ConflictException('Driver already exists!');
        }

        const driver = new this.driverModel({
            name: name,
            address: address,
            city: city,
            state: state,
            pincode: pincode,
            licence: licence,
            phoneNumber: phoneNumber
        });

        return driver.save();
    }

    async getDriver(): Promise<Driver | any> {
        try {
            return await this.driverModel.find().exec();
        } catch (error) {
            throw new ForbiddenException(error.message);
        }
    }

    async getDriverDuplicate(licence: string): Promise<Driver | any> {
        try {
            const existingDriver = await this.driverModel.findOne({ licence: { $regex: new RegExp(`^${licence}$`, "i") } }).exec();
            if (existingDriver) {
                throw new ConflictException('Driver already exists!');
            }
            else {
                return true;
            }
        } catch (error) {
            throw new ForbiddenException(error.message);
        }
    }

    async getDriverById(id: string): Promise<Driver | null> {
        try {
            return await this.driverModel.findById(id);
        } catch (error) {
            throw new ForbiddenException(error.message);
        }
    }

    async updateDriver(id: string, dto: createDriverDto): Promise<Driver | null> {
        try {
            return await this.driverModel.findByIdAndUpdate(id, dto, { new: true });
        } catch (error) {
            throw new ForbiddenException(error.message);
        }
    }

    async deleteDriver(id: string): Promise<Driver | null> {
        try {
            return await this.driverModel.findByIdAndDelete(id);
        } catch (error) {
            throw new ForbiddenException(error.message);
        }
    }
}
