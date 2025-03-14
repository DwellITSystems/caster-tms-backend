import { Module } from '@nestjs/common';
import { DriverController } from './driver.controller';
import { DriverService } from './driver.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Driver, driverSchema } from './schemas/driver.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Driver.name,
        schema: driverSchema
      }
    ])
  ],
  controllers: [DriverController],
  providers: [DriverService],
  exports: [MongooseModule]
})
export class DriverModule { }
