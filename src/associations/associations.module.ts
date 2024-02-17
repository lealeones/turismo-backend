import { Module } from '@nestjs/common';
import { AssociationsService } from './associations.service';
import { AssociationsResolver } from './associations.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [AssociationsResolver, AssociationsService],
  imports: [PrismaModule]
})
export class AssociationsModule { }
