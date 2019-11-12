import { Controller, Get } from '@nestjs/common';
import { DiseasesService } from './diseases.service';

@Controller('patient/diseases')
export class DiseasesController {
   constructor(private disease: DiseasesService) { }

   @Get()
   all() {
      return this.disease.all()
   }
}
