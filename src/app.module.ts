//import 'reflect-metadata';
import { ApolloDriver } from "@nestjs/apollo";
import { Module } from '@nestjs/common';
import { GraphQLModule } from "@nestjs/graphql";
import { TypeGraphQLModule } from 'typegraphql-nestjs';
import { AssociationsModule } from './associations/associations.module';
import { PrismaService } from './prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { pubSub } from './pubsub/pubsub';
import { PostResolver } from './resolvers.post';
import { UserResolver } from './resolvers.user';
import { SendModule } from './send/send.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { TicketsTransactionModule } from './tickets-transaction/tickets-transaction.module';
import { TripsModule } from './trips/trips.module';

@Module({
  imports: [
    PrismaModule,
    TypeGraphQLModule.forRoot({
      driver: ApolloDriver,
      emitSchemaFile: true,
      pubSub: pubSub,
      //path: '/graphql',
    }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      subscriptions: {
        'graphql-ws': true
      },
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema-subs.gql',
      path: '/ws',
    }),
    //TicketsModule, //PROBLEM
    TripsModule,
    AssociationsModule,
    SendModule,
    SubscriptionsModule,
    TicketsTransactionModule,
  ],
  controllers: [],
  providers: [PrismaService, UserResolver, PostResolver],
})
export class AppModule { }
