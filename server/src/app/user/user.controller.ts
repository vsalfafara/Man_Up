import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { UserService } from './user.service'
import yargsParser = require('yargs-parser');

@Controller('user')
export class UserController {
   constructor(private readonly user: UserService) { }

   @Get()
   all(): {} {
      return this.user.all()
   }

   @Get('id/:id')
   findById(@Param('id') id) {
      return this.user.findById(id)
   }

   @Get('email/:email')
   findByEmail(@Param('email') email) {
      return this.user.findByEmail(email)
   }

   @Post()
   create(@Body() user) {
      return this.user.create(user)
   }
}
