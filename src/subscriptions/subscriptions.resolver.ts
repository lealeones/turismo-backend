import { Args, Resolver, Subscription } from '@nestjs/graphql';
import { pubSub } from '../pubsub/pubsub';
import { Subscription as SubEntity } from './entities/subscription.entity';
import { SubscriptionsService } from './subscriptions.service';

@Resolver(() => SubEntity)
export class SubscriptionsResolver {
  constructor(private readonly subscriptionsService: SubscriptionsService) { }

  @Subscription(() => String, {
    resolve: value => value,
  })
  newTrips() {
    return pubSub.subscribe('NEW_TRIP');
  }


  @Subscription(() => Number, {
    filter: (payload, variables) => (payload.idTrip === +variables.idTrip),
    resolve: value => value.idTrip,
  })
  amountAvailableTicket(@Args('idTrip') idTrip: string) {
    return pubSub.subscribe('NEW_TICKET');
  }
}