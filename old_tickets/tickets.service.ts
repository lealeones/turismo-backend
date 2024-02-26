// import { HttpStatus, Injectable } from '@nestjs/common';
// import { Prisma, Ticket as TicketPrisma } from '@prisma/client';
// import { PrismaService } from 'src/prisma/prisma.service';
// import { GetTicketResponse, StatusTicket, Ticket } from './entities/ticket.entity';

// @Injectable()
// export class TicketsService {
//   constructor(private readonly prismaService: PrismaService) { }

//   async ticketAvailable(idTrip: number): Promise<number> {
//     return await this.searchTicketAvailable(idTrip)
//   }

//   async getTicket(ticketInput: Ticket[]): Promise<GetTicketResponse> {
//     try {
//       const countTicket = ticketInput.length
//       //Me fijo si hay cupo
//       if (countTicket < await this.searchTicketAvailable(ticketInput[0].tripId)) {
//         // genero los tickets con la informacion del formulario
//         const ticketsResponse: Ticket[] = await Promise.all(ticketInput.map(async (itemInput) => {
//           const dataTicket: Prisma.TicketCreateInput = {
//             name: itemInput.name,
//             isAdult: itemInput.isAdult,
//             dni: itemInput.dni,
//             trip: { connect: { id: itemInput.tripId } }
//           }
//           const created = await this.prismaService.ticket.create({ data: dataTicket })

//           const ticketsService: Ticket = {
//             id: created.id,
//             name: created.name,
//             isAdult: created.isAdult,
//             dni: created.dni,
//             createdAt: created.createdAt,
//             updatedAt: created.updatedAt,
//             status: created.status,
//             tripId: created.tripId
//           }
//           return ticketsService


//         }))
//         return { tickets: ticketsResponse, message: "Tickets creados", status: HttpStatus.OK }
//       }
//       else {
//         return { tickets: null, message: "No hay cupo", status: HttpStatus.OK }
//       }
//     }
//     catch (err) {
//       return { tickets: null, message: "No se pudo crear tickets", status: HttpStatus.BAD_REQUEST }
//     }
//   }


//   async getTicketById(id: string): Promise<Ticket> {
//     return await this.prismaService.ticket.findUnique({ where: { id: id } })
//   }



//   // @Cron(CronExpression.EVERY_5_SECONDS)
//   // async cronControllerTickets() {
//   //   console.log("CRON TICKETS")

//   //   // const tickets = await this.prismaService.ticket.findMany()
//   //   // tickets.forEach(async (ticket) => {
//   //   //   const trip = await this.prismaService.trip.findUnique({
//   //   //     where: { id: ticket.idTrip }
//   //   //   })
//   //   //   if (trip.status === "Cancelado") {
//   //   //     await this.prismaService.ticket.update({
//   //   //       where: { id: ticket.id },
//   //   //       data: { status: "Cancelado" }
//   //   //     })
//   //   //   }
//   //   // })
//   // }

//   // async create(createTicketInput: CreateTicketInput) {
//   //   return await this.prismaService.ticket.create({ data: createTicketInput })
//   // }

//   // findAll() {
//   //   return `This action returns all tickets`;
//   // }

//   // findOne(id: number) {
//   //   return `This action returns a #${id} ticket`;
//   // }

//   // update(id: number, updateTicketInput: UpdateTicketInput) {
//   //   return `This action updates a #${id} ticket`;
//   // }

//   // remove(id: number) {
//   //   return `This action removes a #${id} ticket`;
//   // }

//   private async searchTicketAvailable(idTrip: number): Promise<number> {
//     try {
//       const trip = await this.prismaService.trip.findUnique({
//         where: { id: idTrip },
//         include: { tickets: true }
//       })
//       const { places, tickets } = trip
//       const activeTickets: TicketPrisma[] = tickets.filter((ticket) => ticket.status !== StatusTicket.FAILED)
//       return places - activeTickets.length
//     }
//     catch {
//       return 0
//     }
//   }a
// }
