import { InputType, Int, Field } from '@nestjs/graphql';
import { Ticket } from '../../tickets/entities/ticket.entity';

@InputType()
export class CreateTripInput {
  @Field(() => Date, { description: 'startTime' })
  startTime: Date;
  @Field(() => String, { description: 'title' })
  title: string;
  @Field(() => String, { description: 'dscr' })
  dscr: string;
  @Field(() => [Ticket], { nullable: true, description: 'dscr' })
  ticket: Ticket[];
}

