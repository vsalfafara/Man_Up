import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigService } from './config/config.service';
import { AuthModule } from './app/auth/auth.module';
import { UserModule } from './app/user/user.module';

@Module({
  imports: [DatabaseModule, AuthModule, UserModule],
  providers: [
    {
      provide: ConfigService,
      useValue: new ConfigService('.env')
    }
  ]
})
export class AppModule { }
