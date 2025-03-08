import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Trip } from './schemas/trip.schema';
import { Model } from 'mongoose';
import { createTripDto, updateTripDto } from './dto';
import { Driver } from 'src/driver/schemas/driver.schema';
import { updateDriverDto } from 'src/driver/dto';

@Injectable()
export class TripService {
    constructor(
        @InjectModel(Trip.name)
        private tripModel: Model<Trip>,
        @InjectModel(Driver.name) private driverModel: Model<Driver>,
    ) { }

    async createTrip(dto: createTripDto) {
        const {
            uniqueID,
            date,
            tripStartingPlace,
            tripEndingPlace,
            ownVehicle,
            vehicleNumber,
            driverId,
            driverName,
            driverPhoneNo,
            driverBatta,
            driverAdvance,
            driverBataBalance,
            startingKM,
            dieselCost,
            vehicleOwnerDriverPhoneNo,
            vehicleOwnerDriverName,
            vehicleType,
            checkpointCharge,
            haltCharge,
            rent,
            unloadingCharge,
            commission,
            vehicleAdvanceActive,
            vehicleAdvance,
            vehicleBalance,
            vehicleRemark,
            companyName,
            lrno,
            lrNoActive,
            invoiceAmount,
            gst,
            fromAddress,
            toAddress,
            goods,
            weight,
            totalFrightCharge,
            frightAdvance,
            creditAccount,
            frightchargebalance,
            billAmount,
            companyRemark,
            vehiclePayment,
            companyPayment,
            bataPayment,
            tripStatus,
            tripTotalExpence,
            tripProfit
        } = dto;

        console.log(vehicleRemark)

        const formattedVehicleRemark = Array.isArray(vehicleRemark) ? vehicleRemark : [{ name: vehicleRemark, user: "userview" }];
        const formattedCompanyRemark = Array.isArray(companyRemark) ? companyRemark : [{ name: companyRemark, user: "userview" }];

        // ✅ Store the driverId in tripModel
        const trip = new this.tripModel({
            uniqueID,
            date,
            tripStartingPlace,
            tripEndingPlace,
            ownVehicle,
            vehicleNumber,
            driverId,
            driverName,
            driverPhoneNo,
            driverBatta,
            driverAdvance,
            driverBataBalance,
            startingKM,
            dieselCost,
            vehicleOwnerDriverPhoneNo,
            vehicleOwnerDriverName,
            vehicleType,
            checkpointCharge,
            haltCharge,
            rent,
            unloadingCharge,
            commission,
            vehicleAdvanceActive,
            vehicleAdvance,
            vehicleBalance,
            vehicleRemark: '',
            companyName,
            lrno,
            lrNoActive,
            invoiceAmount,
            gst,
            fromAddress,
            toAddress,
            goods,
            weight,
            totalFrightCharge,
            frightAdvance,
            creditAccount,
            frightchargebalance,
            billAmount,
            companyRemark: '',
            vehiclePayment,
            companyPayment,
            bataPayment,
            tripStatus,
            tripTotalExpence,
            tripProfit
        });
        return trip.save();
    }


    async getTrip(): Promise<Trip | any> {
        try {
            return await this.tripModel.find().exec();
        } catch (error) {
            throw new ForbiddenException(error.message);
        }
    }

    async getTripById(id: string): Promise<Trip | null> {
        try {
            return await this.tripModel.findById(id);
        } catch (error) {
            throw new ForbiddenException(error.message);
        }
    }

    async updateTrip(id: string, dto: updateTripDto): Promise<Trip | null> {
        try {
            return await this.tripModel.findByIdAndUpdate(id, dto, { new: true });
        } catch (error) {
            throw new ForbiddenException(error.message);
        }
    }

    async deleteTrip(id: string): Promise<Trip | null> {
        try {
            return await this.tripModel.findByIdAndDelete(id);
        } catch (error) {
            throw new ForbiddenException(error.message);
        }
    }
}
