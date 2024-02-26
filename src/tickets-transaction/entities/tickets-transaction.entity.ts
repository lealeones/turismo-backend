import "reflect-metadata";
import { Field, Int, ObjectType } from 'type-graphql';
import { Ticket } from "../../../prisma/generated/type-graphql";


@ObjectType()
export class GetTicketResponse {
  @Field(() => [Ticket], { nullable: true, description: 'tickets' })
  tickets: Ticket[];
  @Field(() => String, { description: 'message' })
  message: string;
  @Field(() => Int, { description: 'status' })
  status: number;
}

export enum StatusTicket {
  IN_PROGRESS = 'IN_PROGRESS',
  ACCEPTED = 'ACCEPTED',
  FAILED = 'FAILED'
}
