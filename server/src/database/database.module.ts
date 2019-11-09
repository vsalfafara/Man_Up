import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '../config/config.service';

const env = new ConfigService('.env');
const db = env.get('DB_HOST')

const mongooseConfig = {
   'useNewUrlParser': true,
   'useFindAndModify': true,
   'useCreateIndex': true,
   'useUnifiedTopology': true
}

const mongoose = MongooseModule.forRoot(db, mongooseConfig)

@Module({
   imports: [mongoose]
})
export class DatabaseModule { }
