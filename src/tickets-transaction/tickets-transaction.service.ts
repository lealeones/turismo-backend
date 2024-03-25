import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Ticket, TicketCreateInput } from '../../prisma/generated/type-graphql';
import { GetTicketResponse, StatusTicket, } from './entities/tickets-transaction.entity';
import { pubSub } from '../pubsub/pubsub';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class TicketsTransactionService {
  private prisma = new PrismaClient();

  async reserveTickets(idTrip: number, reservedTickets: number): Promise<GetTicketResponse> {
    try {
      if (reservedTickets <= await this.searchTicketAvailable(idTrip)) {
        const response: Ticket[] = await Promise.all(Array.from({ length: reservedTickets },
          () => this.prisma.ticket.create({ data: { status: StatusTicket.IN_PROGRESS, trip: { connect: { id: idTrip } } } })))
        pubSub.publish('NEW_TICKET', { idTrip: idTrip, amount: 'asd' });
        return { tickets: response, message: "Reservado", status: HttpStatus.OK };
      }
      else { return { tickets: null, message: "No hay cupo", status: HttpStatus.OK } }
    } catch (err) {
      return { tickets: null, message: "No se pudo crear tickets", status: HttpStatus.BAD_REQUEST };
    }
    finally {
      pubSub.publish('NEW_TICKET', { idTrip: idTrip, amount: 'asd' });
    }
  }


  //Funcion para la compra de tickets, recibe un array de tickets (input form)
  async getTicket(tickets: TicketCreateInput[], idTrip: number,): Promise<GetTicketResponse> {
    try {
      const countTickets = tickets.length;
      if (countTickets <= await this.searchTicketAvailable(idTrip)) {
        const response: Ticket[] = await Promise.all(tickets.map(async (item) => {
          return await this.prisma.ticket.create({ data: { ...item, trip: { connect: { id: idTrip } } } });
        }));
        pubSub.publish('NEW_TICKET', { idTrip: idTrip, amount: 'asd' });
        return { tickets: response, message: "Tickets creados", status: HttpStatus.OK };
      } else {
        return { tickets: null, message: "No hay cupo", status: HttpStatus.OK };
      }
    } catch (err) {
      return { tickets: null, message: "No se pudo crear tickets", status: HttpStatus.BAD_REQUEST };
    }
  }

  async ticketAvailable(idTrip: number): Promise<number> {
    return await this.searchTicketAvailable(idTrip)
  }

  @Cron(CronExpression.EVERY_5_SECONDS)
  async cronControllerTickets() {
    const tickets = await this.prisma.ticket.findMany()
    tickets.forEach(async (ticket) => {
      if (ticket.status === StatusTicket.IN_PROGRESS && ticket.createdAt < new Date(Date.now() - 1000 * 60 * 1)) {
        console.log("TICKET FAILED " + ticket.id)
        await this.prisma.ticket.update({
          where: { id: ticket.id },
          data: { status: StatusTicket.FAILED }
        })
        pubSub.publish('NEW_TICKET', { idTrip: ticket.tripId, amount: 'asd' });
      }
    })
  }

  // Funciones privadas del servicio
  private async searchTicketAvailable(idTrip: number): Promise<number> {
    try {
      const trip = await this.prisma.trip.findUnique({
        where: { id: idTrip },
        include: { tickets: true }
      })
      const { places, tickets } = trip
      const activeTickets: Ticket[] = tickets.filter(({ status }) => status === (StatusTicket.IN_PROGRESS || StatusTicket.ACCEPTED))
      console.log("tickets count", tickets.length)
      console.log("asd", places, activeTickets.length)
      return places - activeTickets.length
    }
    catch {
      return 0
    }
  }
}
//IN_PROGRESS