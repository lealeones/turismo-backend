import { Injectable, Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Trip, TripCreateWithoutTicketsInput } from '../../prisma/generated/type-graphql';

@Injectable()
export class TripsService {
  private logger = new Logger(TripsService.name);
  private prisma = new PrismaClient();

  async create(data: TripCreateWithoutTicketsInput) {
    try {
      this.logger.log(`Creando viaje input: ${JSON.stringify(data)}`)
      return await this.prisma.trip.create({ data: { ...data, association: { connect: { id: data.association.connect.id } } } })
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
        const fechaActual = new Date();
        const primerDiaSemana = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), fechaActual.getDate() - fechaActual.getDay());
        const ultimoDiaSemana = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), fechaActual.getDate() - fechaActual.getDay() + 6);
        return await this.prisma.trip.findMany({
          where: {
            startTime: {
              gte: primerDiaSemana, lt: ultimoDiaSemana
            }
          }
        })
      }
      else {
        this.logger.log(`Buscando todas los viajes`)
        return await this.prisma.trip.findMany({
          take: 4
        })
      }
    }
    catch (error) {
      this.logger.error(`Error buscando viajes: ${error}`)
      throw new Error('Error al buscar viajes')
    }
  }

  async findOne(id: number): Promise<Trip> {
    try {
      this.logger.log(`Buscando viaje id:${id}`)
      const trip = await this.prisma.trip.findUnique({
        where: { id: id },
        include: { tickets: true, }
      })
      return trip
    }
    catch (error) {
      this.logger.error(`Error buscando viaje id:${id} ${error}`)
      throw new Error('Error al buscar viaje')
    }
  }

}
