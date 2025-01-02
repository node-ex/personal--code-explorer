import { Module } from '@nestjs/common';
import { GreetingNestjsService } from '../services/greeting.nestjs-service';
import { GreetingNestjsController } from '../controllers/greeting.nestjs-controller';

@Module({
  controllers: [GreetingNestjsController],
  providers: [GreetingNestjsService],
})
export class GreetingModule {}
