//import { Field, ObjectType } from '@nestjs/graphql';
import { Field, InputType, ObjectType } from 'type-graphql';
import { Trip } from '../../trips/entities/trip.entity';

@ObjectType()
@InputType('AssociationInput')
export class Association {
  @Field(() => Number, { nullable: true })
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