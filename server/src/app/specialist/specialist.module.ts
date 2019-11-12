import { Module } from '@nestjs/common';
import { SpecialistController } from './specialist.controller';
import { SpecialistService } from './specialist.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Schema } from '../tools/schema/specialist.schema';
import { TitleModule } from './title/title.module';

const mongoose = MongooseModule.forFeature([
  {
    name: 'specialist',
    schema: Schema
  }
])

@Module({
  imports: [mongoose, TitleModule],
  controllers: [SpecialistController],
  providers: [SpecialistService]
})
export class SpecialistModule { }
