import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Options, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { DriverService } from './driver.service';
import mongoose from 'mongoose';
import { createDriverDto, updateDriverDto } from './dto';

@Controller('driver')
export class DriverController {
    constructor(private readonly driverService: DriverService) { }

    @Options('*')
    async handlePreflight() {
        return;
    }

    @Post('create')
    async createDriver(@Body() dto: createDriverDto) {
        return this.driverService.createDriver(dto);
    }

    @Get()
    async getDriver() {
        return await this.driverService.getDriver();
    }

    @Get(':id')
    async getCompanyById(@Param('id') id: string) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new BadRequestException('Invalid ID');

        const findUser = await this.driverService.getCompanyById(id);
        if (!findUser) throw new NotFoundException('Driver not found');
        return findUser;
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe())
    async updateCompany(@Param('id') id: string, @Body() dto: updateDriverDto) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new BadRequestException('Invalid ID');

        const updateCompany = await this.driverService.updateCompany(id, dto);
        if (!updateCompany) throw new NotFoundException('Driver not found');
        return updateCompany;
    }

    @Delete(':id')
    async deleteCompany(@Param('id') id: string) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new BadRequestException('Invalid ID');

        const deleteUser = await this.driverService.deleteCompany(id);
        if (!deleteUser) throw new NotFoundException('Driver not found');
        return { message: 'Driver deleted successfully' };
    }
}
