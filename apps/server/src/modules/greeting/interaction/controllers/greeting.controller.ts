import { GreetingService } from '../../application/services/greeting.service';

export class GreetingController {
  constructor(private readonly greetingService: GreetingService) {}

  getData() {
    return this.greetingService.getData();
  }
}
