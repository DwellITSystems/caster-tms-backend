import { Module } from '@nestjs/common';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Company, companySchema } from './schemas/company.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Company.name,
        schema: companySchema
      }
    ])
  ],
  controllers: [CompanyController],
  providers: [CompanyService]
})
export class CompanyModule { }
