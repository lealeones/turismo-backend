import { Module } from '@nestjs/common';
import { TripsResolver } from './trips.resolver';
import { TripsService } from './trips.service';
import { PrismaModule } from '../prisma/prisma.module';
@Module({
  providers: [TripsResolver, TripsService],
  imports: [PrismaModule]
})
export class TripsModule { }
