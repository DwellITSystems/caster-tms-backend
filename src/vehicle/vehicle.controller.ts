import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Options, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { createVehicleDto, updateVehicleDto } from './dto';
import mongoose from 'mongoose';

@Controller('vehicle')
export class VehicleController {
    constructor(private readonly vehicleService: VehicleService) { }

    @Options('*')
    async handlePreflight() {
        return;
    }

    @Post('create')
    async createVehicle(@Body() dto: createVehicleDto) {
        return this.vehicleService.createVehicle(dto);
    }

    @Get()
    async getVehicle() {
        return await this.vehicleService.getVehicle();
    }

    @Get(':id')
    async getVehicleById(@Param('id') id: string) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new BadRequestException('Invalid ID');

        const findDriver = await this.vehicleService.getVehicleById(id);
        if (!findDriver) throw new NotFoundException('Driver not found');
        return findDriver;
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe())
    async updateVehicle(@Param('id') id: string, @Body() dto: updateVehicleDto) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new BadRequestException('Invalid ID');

        const updateDriver = await this.vehicleService.updateVehicle(id, dto);
        if (!updateDriver) throw new NotFoundException('Driver not found');
        return updateDriver;
    }

    @Delete(':id')
    async deleteVehicle(@Param('id') id: string) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new BadRequestException('Invalid ID');

        const deleteUser = await this.vehicleService.deleteVehicle(id);
        if (!deleteUser) throw new NotFoundException('Driver not found');
        return { message: 'Driver deleted successfully' };
    }
}
