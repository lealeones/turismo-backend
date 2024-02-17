import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AssociationsService } from './associations.service';
import { Association } from './entities/association.entity';
import { CreateAssociationInput } from './dto/create-association.input';
import { UpdateAssociationInput } from './dto/update-association.input';

@Resolver(() => Association)
export class AssociationsResolver {
  constructor(private readonly associationsService: AssociationsService) { }

  @Mutation(() => Association)
  createAssociation(
    @Args('createAssociationInput') createAssociationInput: CreateAssociationInput
  ) {
    return this.associationsService.create(createAssociationInput);
  }

  @Query(() => [Association], { name: 'associations' })
  findAll() {
    return this.associationsService.findAll();
  }

  @Query(() => Association, { name: 'association' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.associationsService.findOne(id);
  }

  @Mutation(() => Association)
  updateAssociation(@Args('updateAssociationInput') updateAssociationInput: UpdateAssociationInput) {
    return this.associationsService.update(updateAssociationInput.id, updateAssociationInput);
  }

  @Mutation(() => Association)
  removeAssociation(@Args('id', { type: () => Int }) id: number) {
    return this.associationsService.remove(id);
  }
}
