import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { SpecialistService } from './specialist.service'

@Controller('specialist')
export class SpecialistController {
   constructor(private specialist: SpecialistService) { }

   @Get()
   all() {
      return this.specialist.all()
   }

   @Get('id/:id')
   get(@Param('id') id) {
      return this.specialist.get({ _id: id })
   }

   @Get('user_id/:user_id')
   getByUser(@Param('user_id') user_id) {
      return this.specialist.get({ user_id: user_id })
   }

   @Get('title/:title')
   getSpecialistOnStandby(@Param('title') title) {
      return this.specialist.get({ title: title, standby: true })
   }

   @Post()
   create(@Body() specialist) {
      return this.specialist.create(specialist)
   }

   @Post('standby')
   standby(@Body('id') id) {
      return this.specialist.standby(id)
   }
}
