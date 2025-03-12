import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Trip } from './schemas/trip.schema';
import { Model, Types } from 'mongoose';
import { createTripDto, updateTripDto } from './dto';
import { Driver } from 'src/driver/schemas/driver.schema';
import { updateDriverDto } from 'src/driver/dto';
import * as XLSX from "xlsx";

@Injectable()
export class TripService {
    constructor(
        @InjectModel(Trip.name)
        private tripModel: Model<Trip>,
        @InjectModel(Driver.name) private driverModel: Model<Driver>,
    ) { }

    async createTrip(dto: createTripDto) {
        const {
            updatePayment,
            uniqueID,
            userName,
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
            haltRent,
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

        // ✅ Ensure vehicleRemark is an array of objects
        const _vehicleRemark = Array.isArray(vehicleRemark)
            ? vehicleRemark.map(remark => ({
                _id: new Types.ObjectId(),
                remark: remark?.remark || '',
                date: remark?.date ? new Date(remark.date) : new Date(),
                user: remark?.user
            }))
            : [];

        // ✅ Ensure companyRemark is an array of objects
        const _companyRemark = Array.isArray(companyRemark)
            ? companyRemark.map(remark => ({
                _id: new Types.ObjectId(),
                remark: remark.remark || '',
                date: remark.date ? new Date(remark.date) : new Date(),
                user: remark?.user
            }))
            : [];

        // ✅ Store the driverId in tripModel
        const trip = new this.tripModel({
            updatePayment,
            uniqueID,
            userName,
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
            haltRent,
            unloadingCharge,
            commission,
            vehicleAdvanceActive,
            vehicleAdvance,
            vehicleBalance,
            vehicleRemark: _vehicleRemark,
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
            companyRemark: _companyRemark,
            vehiclePayment,
            companyPayment,
            bataPayment,
            tripStatus,
            tripTotalExpence,
            tripProfit
        });

        return trip.save();
    }

    async processExcelFile(buffer: Buffer): Promise<any> {
        const workbook = XLSX.read(buffer, { type: "buffer" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        const jsonData = XLSX.utils.sheet_to_json(sheet);

        const cleanedData = jsonData.map((doc) => {
            const { _id, ...rest } = doc as any;
            return rest;
        });

        return await this.tripModel.insertMany(cleanedData);
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
