// import "reflect-metadata";
// import {  Int, Mutation, Query, Resolver } from '@nestjs/graphql';
// //import { Arg, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
// import { PrismaClient } from '@prisma/client';
// import { GetTicketResponse, Ticket } from './entities/ticket.entity';
// import { TicketsService } from './tickets.service';



// @Resolver(Ticket)
// export class TicketsResolver {
//   private prisma = new PrismaClient();
//   constructor(private readonly ticketsService: TicketsService) { }

//   @Query(() => String)
//   queryWona2() {
//     return "Wona"
//   }

//   // @Query(() => Number)
//   // ticketAvailable(@Arg('idTrip', () => Int) idTrip: number) {
//   //   return this.ticketsService.ticketAvailable(idTrip);
//   // }

//   // @Query(() => String)
//   // asdasd() {
//   //   return "10"
//   // }



//   // @Mutation(() => GetTicketResponse)
//   // async getNewTicket(
//   //   @Arg('input', () => [Ticket]) ticketsInput: Ticket[]
//   // ) {
//   //   return this.ticketsService.getTicket(ticketsInput);
//   // }


//   // @Query(() => Ticket)
//   // getTicketById(@Arg('id', () => String) id: string) {
//   //   return this.ticketsService.getTicketById(id);
//   // }

//   //@Mutation(() => GetTicketResponse)
//   // @Mutation(() => String)
//   // addPayment(
//   //   @Arg('idTicket', () => String) idTicket,
//   //   @Arg("idPayment", () => String) idPayment: string) {
//   //   //busca en los payment el id y si esta en status aceptada, updatea el ticket a status pagada,un nuevo campo "paymentId" y devuelve el ticket}
//   //   return 'not implemented yet'
//   // }

//   // @Mutation(() => Ticket)
//   // createTicket(@Args('createTicketInput') createTicketInput: CreateTicketInput) {
//   //   return this.ticketsService.create(createTicketInput);
//   // }

//   // @Query(() => [Ticket], { name: 'tickets' })
//   // findAll() {
//   //   return this.ticketsService.findAll();
//   // }

//   // @Query(() => Ticket, { name: 'ticket' })
//   // findOne(@Args('id', { type: () => Int }) id: number) {
//   //   return this.ticketsService.findOne(id);
//   // }

//   // @Mutation(() => Ticket)
//   // updateTicket(@Args('updateTicketInput') updateTicketInput: UpdateTicketInput) {
//   //   return this.ticketsService.update(updateTicketInput.id, updateTicketInput);
//   // }

//   // @Mutation(() => Ticket)
//   // removeTicket(@Args('id', { type: () => Int }) id: number) {
//   //   return this.ticketsService.remove(id);
//   // }
// }
