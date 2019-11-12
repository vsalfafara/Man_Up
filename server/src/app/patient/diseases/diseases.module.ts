import { Module } from '@nestjs/common';
import { DiseasesController } from './diseases.controller';
import { DiseasesService } from './diseases.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Schema } from '../../tools/schema/disease.schema';

const mongoose = MongooseModule.forFeature([
  {
    name: 'disease',
    schema: Schema
  }
])

@Module({
  imports: [mongoose],
  controllers: [DiseasesController],
  providers: [DiseasesService]
})
export class DiseasesModule { }
