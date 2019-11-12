import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service'
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
   constructor(
      private readonly jwt: JwtService,
      private readonly userService: UserService
   ) { }

   async auth(user) {
      const validatedUser = await this.userService.getUser(user.email_address)

      if (!validatedUser)
         return { status: 404 }

      const validatePassword = await this.compareHash(user.password, validatedUser.password)

      if (!validatePassword)
         return { status: 404 }

      const payload = {
         id: validatedUser._id,
         username: `${validatedUser.first_name} ${validatedUser.last_name}`,
         email: validatedUser.email_address
      }

      const accessToken = this.jwt.sign(payload)

      return {
         id: validatedUser._id,
         access_token: accessToken,
         status: 200
      }
   }

   async compareHash(password: string, hash: string): Promise<boolean> {
      return bcrypt.compare(password, hash);
   }
}
