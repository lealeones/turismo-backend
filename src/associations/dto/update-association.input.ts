import { CreateAssociationInput } from './create-association.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAssociationInput extends PartialType(CreateAssociationInput) {
  @Field(() => Int)
  id: number;
}
