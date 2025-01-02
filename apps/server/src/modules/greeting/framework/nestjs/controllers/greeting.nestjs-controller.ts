import { Controller, Get } from '@nestjs/common';
import { GreetingController } from '../../../interaction/controllers/greeting.controller';
import { GreetingNestjsService } from '../services/greeting.nestjs-service';

@Controller()
export class GreetingNestjsController extends GreetingController {
  /**
   * NestJS DI takes care of injecting the GreetingNestjsService
   */
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(greetingService: GreetingNestjsService) {
    super(greetingService);
  }

  @Get()
  override getData() {
    return super.getData();
  }
}
