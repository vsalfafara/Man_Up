import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module'

const jwt = JwtModule.register({
  secret: 'secret123456789'
})


@Module({
  imports: [jwt, UserModule],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule { }
