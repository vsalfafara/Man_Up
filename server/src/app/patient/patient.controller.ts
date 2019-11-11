import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { PatientService } from './patient.service'

@Controller('patient')
export class PatientController {

   constructor(private patient: PatientService) { }

   @Get()
   all() {
      return this.patient.all()
   }

   @Get('id/:id')
   get(@Param('id') id) {
      return this.patient.get({ _id: id })
   }

   @Get('user_id/:user_id')
   getByUser(@Param('user_id') user_id) {
      return this.patient.get({ user_id: user_id })
   }

   @Post()
   create(@Body() patient) {
      return this.patient.create(patient)
   }
}
