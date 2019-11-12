import { Controller, Get } from '@nestjs/common';
import { TitleService } from './title.service'

@Controller('specialist/title')
export class TitleController {

   constructor(private title: TitleService) { }

   @Get()
   all() {
      return this.title.all()
   }
}
