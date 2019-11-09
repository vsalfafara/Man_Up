import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Schema } from '../tools/schema/user.schema';

const mongoose = MongooseModule.forFeature([
  {
    name: 'user',
    schema: Schema
  }
])

@Module({
  imports: [mongoose],
  exports: [UserService],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule { }
