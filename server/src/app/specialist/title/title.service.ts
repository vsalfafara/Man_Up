import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Specialist_Title } from '../..//tools/interface/specialist-title.interface'

@Injectable()
export class TitleService {

   constructor(@InjectModel('specialist-title') private readonly specialist: Model<Specialist_Title>) { }

   async all(): Promise<Specialist_Title[]> {
      return await this.specialist.find().sort({ title: 1 }).exec()
   }
}
