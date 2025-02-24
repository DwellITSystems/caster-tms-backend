import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Options, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CompanyService } from './company.service';
import mongoose from 'mongoose';
import { createCompanyDto } from './dto/createCompany.dto';
import { updateCompanyDto } from './dto/updateCompany.dto';

@Controller('company')
export class CompanyController {
    constructor(private readonly companyService: CompanyService) { }

    @Options('*')
    async handlePreflight() {
        return;
    }

    @Post('create')
    async createCompany(@Body() dto: createCompanyDto) {
        return this.companyService.createCompany(dto);
    }

    @Get('company-check/:id')
    async getCompanyDuplicate(@Param('id') id: string) {
        return await this.companyService.getCompanyDuplicate(id);
    }

    @Get()
    async getCompany() {
        return await this.companyService.getCompany();
    }

    @Get(':id')
    async getCompanyById(@Param('id') id: string) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new BadRequestException('Invalid ID');

        const findUser = await this.companyService.getCompanyById(id);
        if (!findUser) throw new NotFoundException('Company not found');
        return findUser;
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe())
    async updateCompany(@Param('id') id: string, @Body() dto: updateCompanyDto) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new BadRequestException('Invalid ID');

        const updateCompany = await this.companyService.updateCompany(id, dto);
        if (!updateCompany) throw new NotFoundException('Company not found');
        return updateCompany;
    }

    @Delete(':id')
    async deleteCompany(@Param('id') id: string) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new BadRequestException('Invalid ID');

        const deleteUser = await this.companyService.deleteCompany(id);
        if (!deleteUser) throw new NotFoundException('Company not found');
        return { message: 'Company deleted successfully' };
    }
}
