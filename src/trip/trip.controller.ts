import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Options, Param, Patch, Post, UploadedFile, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { TripService } from './trip.service';
import { createTripDto, updateTripDto } from './dto';
import mongoose from 'mongoose';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('trip')
export class TripController {
    constructor(private readonly tripService: TripService) { }

    @Options('*')
    async handlePreflight() {
        return;
    }

    @Post('create')
    async createTrip(@Body() dto: createTripDto) {
        return this.tripService.createTrip(dto);
    }

    @Post('upload')
    @UseInterceptors(FileInterceptor("file"))
    async processExcelFile(@UploadedFile() file: Express.Multer.File) {
        if (!file) {
            return { message: "No file uploaded" };
        }

        const result = await this.tripService.processExcelFile(file.buffer);
        return { message: "File processed successfully", data: result };
    }

    @Get()
    async getTrip() {
        return await this.tripService.getTrip();
    }

    @Get(':id')
    async getTripById(@Param('id') id: string) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new BadRequestException('Invalid ID');

        const findTrip = await this.tripService.getTripById(id);
        if (!findTrip) throw new NotFoundException('Trip not found');
        return findTrip;
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe())
    async updateTrip(@Param('id') id: string, @Body() dto: updateTripDto) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new BadRequestException('Invalid ID');

        const updateTrip = await this.tripService.updateTrip(id, dto);
        if (!updateTrip) throw new NotFoundException('Trip not found');
        return updateTrip;
    }

    @Delete(':id')
    async deleteTrip(@Param('id') id: string) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new BadRequestException('Invalid ID');

        const deleteTrip = await this.tripService.deleteTrip(id);
        if (!deleteTrip) throw new NotFoundException('Trip not found');
        return { message: 'Trip deleted successfully' };
    }
}
