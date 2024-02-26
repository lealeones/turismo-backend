import { Injectable, Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { AssociationCreateWithoutTripsInput } from '../../prisma/generated/type-graphql';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AssociationsService {
  private prisma = new PrismaClient();
  private logger = new Logger(AssociationsService.name);
  constructor(private readonly prismaService: PrismaService) { }

  async create(createAssociationInput: AssociationCreateWithoutTripsInput) {
    try {
      this.logger.log(`Creando asociacion input: ${JSON.stringify(createAssociationInput)}`)

      return await this.prisma.association.create({ data: createAssociationInput })
    } catch (error) {
      this.logger.error(`Error creando asociacion: ${error}`)
      throw new Error('Error al crear asociacion')
    }
  }

  async findAll() {
    try {
      this.logger.log('Buscando todas las asociaciones')
      return await this.prisma.association.findMany()
    }
    catch (error) {
      this.logger.error(`Error creando asociacion: ${error}`)
      throw new Error('Error al crear asociacion')
    }

  }
}
