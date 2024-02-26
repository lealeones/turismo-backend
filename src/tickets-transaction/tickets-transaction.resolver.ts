import "reflect-metadata";
import { Arg, Int, Mutation, Query, Resolver } from 'type-graphql';
import { CreateOneTicketArgs, Ticket, TicketCreateInput, TripCreateNestedOneWithoutTicketsInput } from "../../prisma/generated/type-graphql";
import { GetTicketResponse } from "./entities/tickets-transaction.entity";
import { TicketsTransactionService } from "./tickets-transaction.service";

@Resolver(() => Ticket)
export class TicketsTransactionResolver {
  constructor(private readonly TicketService: TicketsTransactionService) { }

  @Query(() => Number)
  ticketAvailable(@Arg('idTrip', () => Int) idTrip: number) {
    return this.TicketService.ticketAvailable(idTrip);
  }

  @Mutation(() => GetTicketResponse)
  async getNewTicket(
    @Arg('input', () => Number) idTrip: number,
    @Arg('input', () => [TicketCreateInput]) ticketsInput: TicketCreateInput[]
  ) {
    return this.TicketService.getTicket(ticketsInput, idTrip);
  }

}
