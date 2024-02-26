import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssociationUpdateInput } from "../../../inputs/AssociationUpdateInput";
import { AssociationWhereUniqueInput } from "../../../inputs/AssociationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneAssociationArgs {
  @TypeGraphQL.Field(_type => AssociationUpdateInput, {
    nullable: false
  })
  data!: AssociationUpdateInput;

  @TypeGraphQL.Field(_type => AssociationWhereUniqueInput, {
    nullable: false
  })
  where!: AssociationWhereUniqueInput;
}
