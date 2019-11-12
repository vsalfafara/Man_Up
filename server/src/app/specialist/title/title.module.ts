import { Module } from '@nestjs/common';
import { TitleService } from './title.service';
import { TitleController } from './title.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Schema } from '../..//tools/schema/specialist-title.schema';

const mongoose = MongooseModule.forFeature([
   {
      name: 'specialist-title',
      schema: Schema
   }
])

@Module({
   imports: [mongoose],
   providers: [TitleService],
   controllers: [TitleController]
})
export class TitleModule { }
