import { ConflictException, ForbiddenException, Injectable } from '@nestjs/common';
import { Company } from './schemas/company.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { createCompanyDto } from './dto/createCompany.dto';

@Injectable()
export class CompanyService {
    constructor(
        @InjectModel(Company.name)
        private companyModel: Model<Company>
    ) { }

    async createCompany(dto: createCompanyDto) {
        const {
            companyName,
            address,
            city,
            state,
            pincode,
            gstNo,
            contactName,
            phoneNumber
        } = dto;
        const existingCompany = await this.companyModel.findOne({ companyName: companyName }).exec();

        if (existingCompany) {
            throw new ConflictException('Company already exists!');
        }

        const company = new this.companyModel({
            companyName: companyName,
            address: address,
            city: city,
            state: state,
            pincode: pincode,
            gstNo: gstNo,
            contactName: contactName,
            phoneNumber: phoneNumber
        });

        return company.save();
    }

    async getCompanyDuplicate(companyName: string): Promise<Company | any> {
        try {
            const existingCompany = await this.companyModel.findOne({ companyName: { $regex: new RegExp(`^${companyName}$`, "i") } }).exec();
            if (existingCompany) {
                throw new ConflictException('Company already exists!');
            }
            else {
                return true;
            }
        } catch (error) {
            throw new ForbiddenException(error.message);
        }
    }

    async getCompany(): Promise<Company | any> {
        try {
            return await this.companyModel.find().exec();
        } catch (error) {
            throw new ForbiddenException(error.message);
        }
    }

    async getCompanyById(id: string): Promise<Company | null> {
        try {
            return await this.companyModel.findById(id);
        } catch (error) {
            throw new ForbiddenException(error.message);
        }
    }

    async updateCompany(id: string, dto: createCompanyDto): Promise<Company | null> {
        try {
            return await this.companyModel.findByIdAndUpdate(id, dto, { new: true });
        } catch (error) {
            throw new ForbiddenException(error.message);
        }
    }

    async deleteCompany(id: string): Promise<Company | null> {
        try {
            return await this.companyModel.findByIdAndDelete(id);
        } catch (error) {
            throw new ForbiddenException(error.message);
        }
    }
}
