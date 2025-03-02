import { forwardRef, Module } from '@nestjs/common';
import { TripController } from './trip.controller';
import { TripService } from './trip.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Trip, tripSchema } from './schemas/trip.schema';
import { DriverModule } from 'src/driver/driver.module';

@Module({
  imports: [
    forwardRef(() => DriverModule),
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
