import { Module } from '@nestjs/common';
import { PatientController } from './patient.controller';
import { PatientService } from './patient.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Schema } from '../tools/schema/patient.schema';
import { DiseasesModule } from './diseases/diseases.module';

const mongoose = MongooseModule.forFeature([
  {
    name: 'patient',
    schema: Schema
  }
])

@Module({
  imports: [mongoose, DiseasesModule],
  controllers: [PatientController],
  providers: [PatientService]
})
export class PatientModule { }
