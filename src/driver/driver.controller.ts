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

    @Get('driver-check/:id')
    async getDriverDuplicate(@Param('id') id: string) {
        return await this.driverService.getDriverDuplicate(id);
    }

    @Get()
    async getDriver() {
        return await this.driverService.getDriver();
    }

    @Get(':id')
    async getDriverById(@Param('id') id: string) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new BadRequestException('Invalid ID');

        const findDriver = await this.driverService.getDriverById(id);
        if (!findDriver) throw new NotFoundException('Driver not found');
        return findDriver;
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe())
    async updateDriver(@Param('id') id: string, @Body() dto: updateDriverDto) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new BadRequestException('Invalid ID');

        const updateDriver = await this.driverService.updateDriver(id, dto);
        if (!updateDriver) throw new NotFoundException('Driver not found');
        return updateDriver;
    }

    @Delete(':id')
    async deleteDriver(@Param('id') id: string) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new BadRequestException('Invalid ID');

        const deleteUser = await this.driverService.deleteDriver(id);
        if (!deleteUser) throw new NotFoundException('Driver not found');
        return { message: 'Driver deleted successfully' };
    }
}
