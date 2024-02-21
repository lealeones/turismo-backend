import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { AssociationsService } from './associations.service';
import { Association } from './entities/association.entity';

@Resolver(() => Association)
export class AssociationsResolver {
  constructor(private readonly associationsService: AssociationsService) { }

  @Mutation(() => Association)
  createAssociation(
    @Arg("input") createAssociationInput: Association
  ) {
    return this.associationsService.create(createAssociationInput);
  }

  @Query(() => [Association], { name: 'associations' })
  findAll() {
    return this.associationsService.findAll();
  }

  @Query(() => Association, { name: 'association' })
  findOne(@Arg('id') id: number) {
    return this.associationsService.findOne(id);
  }

  @Mutation(() => Association)
  updateAssociation(@Arg('input') updateAssociationInput: Association) {
    return this.associationsService.update(updateAssociationInput.id, updateAssociationInput);
  }

  @Mutation(() => Association)
  removeAssociation(@Arg('id') id: number) {
    return this.associationsService.remove(id);
  }
}
