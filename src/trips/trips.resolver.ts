import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Trip } from './entities/trip.entity';
import { TripsService } from './trips.service';

@Resolver(() => Trip)
export class TripsResolver {
  constructor(private readonly tripsService: TripsService) { }

  @Mutation(() => Trip)
  createTrip(@Arg("input") createTripInput: Trip) {
    return this.tripsService.create(createTripInput);
  }

  @Query(() => [Trip], { name: 'findTrips' })
  findAllTrips(@Arg('currentWeek') currentWeek: boolean) {
    return this.tripsService.findAll(currentWeek);
  }

  @Query(() => Trip, { name: 'trip' })
  findOne(@Arg('id') id: number) {
    return this.tripsService.findOne(id);
  }

  @Mutation(() => Trip)
  updateTrip(@Arg("input") updateTripInput: Trip) {
    return this.tripsService.update(updateTripInput.id, updateTripInput);
  }

  @Mutation(() => Trip)
  removeTrip(@Arg('id') id: number) {
    return this.tripsService.remove(id);
  }
}
