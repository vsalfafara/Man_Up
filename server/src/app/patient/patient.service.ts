import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Patient } from '../tools/interface/patient.interface'

@Injectable()
export class PatientService {

   constructor(@InjectModel('patient') private readonly patient: Model<Patient>) { }

   async all(): Promise<Patient[]> {
      return await this.patient.find().exec()
   }

   async get(search): Promise<Patient> {
      return await this.patient.find(search).exec()
   }

   async create(patient: Patient) {

      try {
         const newPatient = this.patient(patient)
         newPatient.save(function (err) {
            if (err) {
               console.log(err)
               return
            }
         })

         return newPatient
      }
      catch (error) {
         console.log(error.message)
      }
   }
}
