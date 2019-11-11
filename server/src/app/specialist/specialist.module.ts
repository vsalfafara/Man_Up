import { Module } from '@nestjs/common';
import { SpecialistController } from './specialist.controller';
import { SpecialistService } from './specialist.service';

@Module({
  controllers: [SpecialistController],
  providers: [SpecialistService]
})
export class SpecialistModule {}
