import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GreetingModule } from '../greeting/greeting.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
    }),
    GreetingModule,
  ],
})
export class CoreModule {}
