import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Trip } from './schemas/trip.schema';
import { Model } from 'mongoose';
import { createTripDto, updateTripDto } from './dto';

@Injectable()
export class TripService {
    constructor(
        @InjectModel(Trip.name)
        private tripModel: Model<Trip>
    ) { }

    async createTrip(dto: createTripDto) {
        const {
            date,
            tripStartingPlace,
            tripEndingPlace,
            vehicleNumber,
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
            vehicleAdvance,
            vehicleBalance,
            vehicleRemark,
            companyName,
            lrno,
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
            tripStatus,
            tripTotalExpence,
            tripProfit
        } = dto;
        const trip = new this.tripModel({
            date: date,
            tripStartingPlace: tripStartingPlace,
            tripEndingPlace: tripEndingPlace,
            vehicleNumber: vehicleNumber,
            driverName: driverName,
            driverPhoneNo: driverPhoneNo,
            driverBatta: driverBatta,
            driverAdvance: driverAdvance,
            driverBataBalance: driverBataBalance,
            startingKM: startingKM,
            dieselCost: dieselCost,
            vehicleOwnerDriverPhoneNo: vehicleOwnerDriverPhoneNo,
            vehicleOwnerDriverName: vehicleOwnerDriverName,
            vehicleType: vehicleType,
            checkpointCharge: checkpointCharge,
            haltCharge: haltCharge,
            rent: rent,
            unloadingCharge: unloadingCharge,
            commission: commission,
            vehicleAdvance: vehicleAdvance,
            vehicleBalance: vehicleBalance,
            vehicleRemark: vehicleRemark,
            companyName: companyName,
            lrno: lrno,
            invoiceAmount: invoiceAmount,
            gst: gst,
            fromAddress: fromAddress,
            toAddress: toAddress,
            goods: goods,
            weight: weight,
            totalFrightCharge: totalFrightCharge,
            frightAdvance: frightAdvance,
            creditAccount: creditAccount,
            frightchargebalance: frightchargebalance,
            billAmount: billAmount,
            companyRemark: companyRemark,
            vehiclePayment: vehiclePayment,
            companyPayment: companyPayment,
            tripStatus: tripStatus,
            tripTotalExpence: tripTotalExpence,
            tripProfit: tripProfit
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
