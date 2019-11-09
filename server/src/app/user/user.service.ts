import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../tools/interface/user.interface'
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
   private salt = 10;

   constructor(@InjectModel('user') private readonly user: Model<User>) { }

   async all(): Promise<User[]> {
      return await this.user.find().exec()
   }

   async findById(id): Promise<User> {
      try {
         return await this.user.findById(id).exec()
      }
      catch (error) {
         console.log(error.message)
      }
   }

   async findByEmail(email): Promise<User> {
      try {
         return await this.user.findOne({ 'email_address': email }).exec()
      }
      catch (error) {
         console.log(error.message)
      }
   }
   async getUser(email_address) {
      try {
         return await this.user.findOne({ 'email_address': email_address }).exec()
      }
      catch (error) {
         console.log(error.message)
      }
   }

   async create(user) {
      try {
         const existingUser = await this.getUser(user.email_address)

         if (existingUser)
            return { message: "Email address has already been taken!" }

         user.password = await this.getHash(user.password);
         const newUser = this.user(user)
         newUser.save(function (err) {
            if (err) {
               console.log(err);
               return;
            }
         });

         return newUser
      }
      catch (error) {
         console.log(error.message)
      }
   }

   async getHash(password: string): Promise<string> {
      return bcrypt.hash(password, this.salt);
   }

   async compareHash(password: string, hash: string): Promise<boolean> {
      return bcrypt.compare(password, hash);
   }
}
