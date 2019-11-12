import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Specialist } from '../tools/interface/specialist.interface'

@Injectable()
export class SpecialistService {

   constructor(@InjectModel('specialist') private readonly specialist: Model<Specialist>) { }

   async all(): Promise<Specialist[]> {
      return await this.specialist.find().exec()
   }

   async get(search): Promise<Specialist> {
      return await this.specialist.findOne(search).exec()
   }

   async standby(id) {
      return await this.specialist.findOneAndUpdate({ user_id: id }, { standby: true })
   }

   async create(patient: Specialist) {

      try {
         const newSpecialist = this.specialist(patient)
         newSpecialist.save(function (err) {
            if (err) {
               console.log(err)
               return
            }
         })

         return newSpecialist
      }
      catch (error) {
         console.log(error.message)
      }
   }
}
