import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigService } from './config/config.service';
import { AuthModule } from './app/auth/auth.module';
import { UserModule } from './app/user/user.module';
import { SpecialistModule } from './app/specialist/specialist.module';
import { PatientModule } from './app/patient/patient.module';

@Module({
  imports: [DatabaseModule, AuthModule, UserModule, SpecialistModule, PatientModule],
  providers: [
    {
      provide: ConfigService,
      useValue: new ConfigService('.env')
    }
  ]
})
export class AppModule { }
