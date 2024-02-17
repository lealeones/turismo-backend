import { Field, ObjectType } from '@nestjs/graphql';
import { Trip } from '../../trips/entities/trip.entity';

@ObjectType()

export class Association {
  @Field(() => Number)
  id: number;
  @Field()
  name: string;
  @Field()
  dsrc: string;
  @Field()
  urlImage: string;
  @Field(() => [Trip], { nullable: true })
  trips: Trip[];
}