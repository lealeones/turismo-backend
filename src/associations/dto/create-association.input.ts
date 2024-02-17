import { Field, InputType } from '@nestjs/graphql';
import { Trip } from '../../trips/entities/trip.entity';

@InputType()
export class CreateAssociationInput {
  @Field(() => String, { description: 'nombre de la asociacion' })
  name: string;
  @Field(() => String)
  dsrc: string;
  @Field(() => String)
  urlImage: string;
  @Field(() => [Trip], { nullable: true })
  trips: Trip[]
}
