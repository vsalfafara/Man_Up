import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Disease } from '../../tools/interface/disease.interface'

@Injectable()
export class DiseasesService {

   constructor(@InjectModel('disease') private readonly patient: Model<Disease>) { }

   async all() {
      return this.patient.find().exec()
   }
}
