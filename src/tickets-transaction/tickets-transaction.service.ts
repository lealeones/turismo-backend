import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateOneTicketArgs, Ticket, TicketCreateInput } from '../../prisma/generated/type-graphql';
import { GetTicketResponse, StatusTicket, } from './entities/tickets-transaction.entity';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class TicketsTransactionService {
  private prisma = new PrismaClient();

  async ticketAvailable(idTrip: number): Promise<number> {
    return await this.searchTicketAvailable(idTrip)
  }

  //Funcion para la compra de tickets, recibe un array de tickets (input form)
  async getTicket(tickets: TicketCreateInput[], idTrip: number): Promise<GetTicketResponse> {
    try {
      const countTickets = tickets.length;
      if (countTickets < await this.searchTicketAvailable(idTrip)) {
        const response: Ticket[] = await Promise.all(tickets.map(async (item) => {
          return await this.prisma.ticket.create({ data: { ...item, trip: { connect: { id: idTrip } } } });
        }));
        return { tickets: response, message: "Tickets creados", status: HttpStatus.OK };
      } else {
        return { tickets: null, message: "No hay cupo", status: HttpStatus.OK };
      }
    } catch (err) {
      return { tickets: null, message: "No se pudo crear tickets", status: HttpStatus.BAD_REQUEST };
    }
  }


  // Funciones privadas del servicio
  private async searchTicketAvailable(idTrip: number): Promise<number> {
    try {
      const trip = await this.prisma.trip.findUnique({
        where: { id: idTrip },
        include: { tickets: true }
      })
      const { places, tickets } = trip
      const activeTickets: Ticket[] = tickets.filter((ticket) => ticket.status !== StatusTicket.FAILED)
      return places - activeTickets.length
    }
    catch {
      return 0
    }
  }
}
