import { Module } from '@nestjs/common';
import { TripController } from './trip.controller';
import { TripService } from './trip.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Trip, tripSchema } from './schemas/trip.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Trip.name,
        schema: tripSchema
      }
    ])
  ],
  controllers: [TripController],
  providers: [TripService]
})
export class TripModule { }
