import { Module } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { VehicleController } from './vehicle.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Vehicle, vehicleSchema } from './schemas/vehicle.schema';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Vehicle.name,
        schema: vehicleSchema
      }
    ])
  ],
  providers: [VehicleService, JwtAuthGuard, JwtService],
  controllers: [VehicleController]
})
export class VehicleModule { }
