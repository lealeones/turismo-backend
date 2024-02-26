import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssociationUpdateManyMutationInput } from "../../../inputs/AssociationUpdateManyMutationInput";
import { AssociationWhereInput } from "../../../inputs/AssociationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAssociationArgs {
  @TypeGraphQL.Field(_type => AssociationUpdateManyMutationInput, {
    nullable: false
  })
  data!: AssociationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => AssociationWhereInput, {
    nullable: true
  })
  where?: AssociationWhereInput | undefined;
}
