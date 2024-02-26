import { PrismaClient } from "@prisma/client";
import "reflect-metadata";
import { Arg, FieldResolver, Int, Mutation, Query, Resolver, Root } from 'type-graphql';
import { pubSub } from '../pubsub/pubsub';
import { TripsService } from './trips.service';
import { Trip, TripCreateWithoutTicketsInput } from "../../prisma/generated/type-graphql";
@Resolver(() => Trip)
export class TripsResolver {
  private prisma = new PrismaClient();
  constructor(private readonly tripsService: TripsService) { }
  @FieldResolver(() => String, { nullable: true, name: 'nameAssociation' })
  async nameAssociation(@Root() trip: Trip) {
    return (await this.prisma.association.findUnique({ where: { id: trip.associationId } })).name
  }

  @Mutation(() => Trip)
  async createTrip(@Arg('TripCreateWithoutTicketsInput') createTripInput: TripCreateWithoutTicketsInput) {
    const response = await this.tripsService.create(createTripInput);
    //Emito evento para notificar a los subscriptores
    if (response) { pubSub.publish('NEW_TRIP', `NEW TRIP ID ${response.id}`); }
    return response;
  }

  @Query(() => [Trip], { name: 'findTrips' })
  findAllTrips(@Arg('currentWeek') currentWeek: boolean) {
    return this.tripsService.findAll(currentWeek);
  }

  @Query(() => Trip, { name: 'trip' })
  findOne(@Arg('id', () => Int,) id: number) {
    return this.tripsService.findOne(id);
  }
}
