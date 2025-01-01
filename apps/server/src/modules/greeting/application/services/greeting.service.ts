import { Injectable } from '@nestjs/common';

@Injectable()
export class GreetingService {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }
}
