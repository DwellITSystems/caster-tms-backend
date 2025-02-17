import { ConflictException, ForbiddenException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Vehicle } from './schemas/vehicle.schema';
import { Model } from 'mongoose';
import { createVehicleDto } from './dto';

@Injectable()
export class VehicleService {
    constructor(
        @InjectModel(Vehicle.name)
        private vehicleModel: Model<Vehicle>
    ) { }

    async createVehicle(dto: createVehicleDto) {
        const {
            vehicleNo,
            model,
            year,
            ownerName,
            insuranceCompany,
            insuranceDueDate,
            fitnessDueDate,
            pollutionDueDate,
            totalKM,
            serviceDueDate,
            tyreChangeKM,
            vehicleType,
            vehicleTon,
            bata
        } = dto;
        const existingCompany = await this.vehicleModel.findOne({ vehicleNo: vehicleNo }).exec();

        if (existingCompany) {
            throw new ConflictException('Vehicle already exists!');
        }

        const vehicleDetails = new this.vehicleModel({
            vehicleNo,
            model,
            year,
            ownerName,
            insuranceCompany,
            insuranceDueDate,
            fitnessDueDate,
            pollutionDueDate,
            totalKM,
            serviceDueDate,
            tyreChangeKM,
            vehicleType,
            vehicleTon,
            bata
        });

        return vehicleDetails.save();
    }

    async getVehicle(): Promise<Vehicle | any> {
        try {
            return await this.vehicleModel.find().exec();
        } catch (error) {
            throw new ForbiddenException(error.message);
        }
    }

    async getVehicleById(id: string): Promise<Vehicle | null> {
        try {
            return await this.vehicleModel.findById(id);
        } catch (error) {
            throw new ForbiddenException(error.message);
        }
    }

    async updateVehicle(id: string, dto: createVehicleDto): Promise<Vehicle | null> {
        try {
            return await this.vehicleModel.findByIdAndUpdate(id, dto, { new: true });
        } catch (error) {
            throw new ForbiddenException(error.message);
        }
    }

    async deleteVehicle(id: string): Promise<Vehicle | null> {
        try {
            return await this.vehicleModel.findByIdAndDelete(id);
        } catch (error) {
            throw new ForbiddenException(error.message);
        }
    }
}
