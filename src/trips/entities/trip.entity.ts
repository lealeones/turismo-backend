import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { Ticket } from '../../tickets/entities/ticket.entity';

@ObjectType()
@InputType('TripInput')
export class Trip {
  @Field(() => Int, { description: 'id' })
  id: number;
  @Field(() => Date, { description: 'startTime' })
  startTime: Date;
  @Field(() => String, { description: 'title' })
  title: string;
  @Field(() => String, { description: 'dscr' })
  dscr: string;
  @Field(() => [Ticket], { nullable: true, description: 'dscr' })
  ticket: Ticket[];
}


// model Trip {
//   id            Int          @id @default(autoincrement())
//   startTime     DateTime
//   title         String
//   dscr          String
//   Ticket        Ticket[]
//   Association   Association? @relation(fields: [associationId], references: [id])
//   associationId Int?
// }
