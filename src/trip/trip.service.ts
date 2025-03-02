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

        // ✅ Fetch driver details safely
        let drivingDetails;
        if (driverId) {
            drivingDetails = await this.driverModel.findById(driverId).exec();
        }

        // ✅ Ensure we don't add undefined values
        const _driverBattaCheck = (drivingDetails?.driverBatta || 0) + (driverBatta || 0);
        const _driverAdvanceCheck = (drivingDetails?.driverAdvance || 0) + (driverAdvance || 0);
        const _driverBataBalanceCheck =
            (drivingDetails?.driverAdvance || 0) + (driverAdvance || 0)
            -
            ((drivingDetails?.driverBatta || 0) + (driverBatta || 0))

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
        });

        // ✅ Update driver only if driverId exists
        if (driverId) {
            await this.driverModel.findByIdAndUpdate(
                driverId,
                {
                    driverBatta: _driverBattaCheck,
                    driverAdvance: _driverAdvanceCheck,
                    driverBataBalance: _driverBataBalanceCheck
                },
                { new: true }
            );
        }

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
