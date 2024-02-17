import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { PrismaService } from './prisma.service'
import { PostResolver } from './resolvers.post'
import { UserResolver } from './resolvers.user'
import { join } from 'path'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { AssociationsModule } from './associations/associations.module';
import { PrismaModule } from './prisma/prisma.module'
import { TripsModule } from './trips/trips.module'
import { TicketsModule } from './tickets/tickets.module'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      buildSchemaOptions: { dateScalarMode: 'timestamp' },
    }),
    PrismaModule,
    TripsModule,
    TicketsModule,
    AssociationsModule,
  ],
  controllers: [],
  providers: [PrismaService, UserResolver, PostResolver],
})
export class AppModule { }
