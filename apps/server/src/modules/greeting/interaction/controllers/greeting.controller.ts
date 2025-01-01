import { Controller, Get } from '@nestjs/common';
import { GreetingService } from '../../application/services/greeting.service';

@Controller()
export class GreetingController {
  constructor(private readonly greetingService: GreetingService) {}

  @Get()
  getData() {
    return this.greetingService.getData();
  }
}
