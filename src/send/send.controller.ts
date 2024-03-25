import { Controller, Get } from '@nestjs/common';
import { SendService } from './send.service';
import { pubSub } from '../pubsub/pubsub';

@Controller('send')
export class SendController {
  constructor(private readonly sendService: SendService) { }


  @Get('backdoor')
  backdoor() {
    console.log("BACKDOOR")
  }


  @Get()
  getHello() {
    console.log("HOLA MUNDO")
    pubSub.publish('NEW_TRIP', `NEW TRIP ID test`);
    pubSub.publish('NEW_TICKET', { idTrip: 1, amount: 'asd' });
  }
}
