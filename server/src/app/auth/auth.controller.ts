import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
   constructor(private readonly auth: AuthService) { }

   @Post()
   authenticate(@Body() user) {
      return this.auth.auth(user)
   }
}
