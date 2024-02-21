import { ApolloDriver,ApolloDriverConfig  } from '@nestjs/apollo'
import { Module } from '@nestjs/common'

import { TypeGraphQLModule } from 'typegraphql-nestjs'
import { AssociationsModule } from './associations/associations.module'
import { PrismaService } from './prisma.service'
import { PrismaModule } from './prisma/prisma.module'
import { PostResolver } from './resolvers.post'
import { UserResolver } from './resolvers.user'
import { TicketsModule } from './tickets/tickets.module'
import { TripsModule } from './trips/trips.module'
import { GraphQLTimestamp } from 'graphql-scalars'

@Module({
  imports: [
    
    PrismaModule,
    TypeGraphQLModule.forRoot({
      driver: ApolloDriver,
      emitSchemaFile: true,
     // scalarsMap: [{ type: Date, scalar: GraphQLTimestamp }],
      //context: ({ req }) => ({ currentUser: req.user }),
    }),
    TripsModule,
    TicketsModule,
    AssociationsModule,
  ],
  controllers: [],
  providers: [PrismaService, UserResolver, PostResolver],
})
export class AppModule { }
