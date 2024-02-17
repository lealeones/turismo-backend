import { Injectable, Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTripInput } from './dto/create-trip.input';
import { UpdateTripInput } from './dto/update-trip.input';

@Injectable()
export class TripsService {
  private logger = new Logger(TripsService.name);
  constructor(private readonly prismaService: PrismaService) { }
  async create(createTripInput: CreateTripInput) {
    try {
      this.logger.log(`Creando viaje input: ${JSON.stringify(createTripInput)}`)
      const ticketCreateInputs: Prisma.TicketCreateWithoutTripInput[] = createTripInput.ticket.map(element => ({
        name: element.name,
        lasName: element.lasName,
        dni: element.dni

      }));
      const data: Prisma.TripCreateInput = {
        ...createTripInput,
        ticket: {
          create: ticketCreateInputs
        }
      }
      return await this.prismaService.trip.create({ data })
    }
    catch (error) {
      this.logger.error(`Error creando viaje: ${error}`)
      throw new Error('Error al crear viaje')
    }

  }

  async findAll(currentWeek: boolean) {
    try {
      if (currentWeek) {
        this.logger.log(`Buscando viajes de esta semana`)
        const firstDayOfWeek: Date = new Date(new Date().setDate(new Date().getDate() - new Date().getDay()));
        return await this.prismaService.trip.findMany({
          where: {
            startTime: {
              gte: firstDayOfWeek, // Convert firstDayOfWeek to a Date object
              lt: new Date() //FIXME Ultimo dia de la semana
            }
          }
        })
      }
      else {
        this.logger.log(`Buscando todas los viajes`)
        return await this.prismaService.trip.findMany()
      }

    }
    catch (error) {
      this.logger.error(`Error buscando viajes: ${error}`)
      throw new Error('Error al buscar viajes')
    }
  }

  findOne(id: number) {
    try {
      this.logger.log(`Buscando viaje id:${id}`)
      return this.prismaService.trip.findUnique({
        where: {
          id: id
        }
      })
    }
    catch (error) {
      this.logger.error(`Error buscando viaje id:${id} ${error}`)
      throw new Error('Error al buscar viaje')
    }
  }

  update(id: number, updateTripInput: UpdateTripInput) {
    return `This action updates a #${id} trip`;
  }

  remove(id: number) {
    return `This action removes a #${id} trip`;
  }
}
