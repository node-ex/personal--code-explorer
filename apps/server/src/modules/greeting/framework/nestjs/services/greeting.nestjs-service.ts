import { Injectable } from '@nestjs/common';
import { GreetingService } from '../../../application/services/greeting.service';

@Injectable()
export class GreetingNestjsService extends GreetingService {}
