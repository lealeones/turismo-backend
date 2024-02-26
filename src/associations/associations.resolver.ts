import "reflect-metadata";
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Association, AssociationCreateWithoutTripsInput } from "../../prisma/generated/type-graphql";
import { AssociationsService } from './associations.service';

@Resolver(() => Association)
export class AssociationsResolver {
  constructor(private readonly associationsService: AssociationsService) { }

  @Mutation(() => Association)
  createAssociation(
    @Arg("input") createAssociationInput: AssociationCreateWithoutTripsInput
  ) { return this.associationsService.create(createAssociationInput) }

  @Query(() => [Association], { name: 'associations' })
  findAll() { return this.associationsService.findAll() }

}
