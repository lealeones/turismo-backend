import { Injectable, Logger } from '@nestjs/common';
import { CreateAssociationInput } from './dto/create-association.input';
import { UpdateAssociationInput } from './dto/update-association.input';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class AssociationsService {
  private logger = new Logger(AssociationsService.name);
  constructor(private readonly prismaService: PrismaService) { }

  async create(createAssociationInput: CreateAssociationInput) {
    try {
      this.logger.log(`Creando asociacion input: ${JSON.stringify(createAssociationInput)}`)

      const data: Prisma.AssociationCreateInput = {
        ...createAssociationInput,
        
        trips: {
          
          
            
         
        }
      }
      return await this.prismaService.association.create({ data })
    } catch (error) {
      this.logger.error(`Error creando asociacion: ${error}`)
      throw new Error('Error al crear asociacion')
    }
  }

  async findAll() {
    try {
      this.logger.log('Buscando todas las asociaciones')
      return await this.prismaService.association.findMany()
    }
    catch (error) {
      this.logger.error(`Error creando asociacion: ${error}`)
      throw new Error('Error al crear asociacion')
    }

  }

  findOne(id: number) {
    return `This action returns a #${id} association`;
  }

  update(id: number, updateAssociationInput: UpdateAssociationInput) {
    return `This action updates a #${id} association`;
  }

  remove(id: number) {
    return `This action removes a #${id} association`;
  }
}
