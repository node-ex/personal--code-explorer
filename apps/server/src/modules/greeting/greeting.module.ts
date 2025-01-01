import { Module } from '@nestjs/common';
import { GreetingController } from './interaction/controllers/greeting.controller';
import { GreetingService } from './application/services/greeting.service';

@Module({
  controllers: [GreetingController],
  providers: [GreetingService],
})
export class GreetingModule {}
