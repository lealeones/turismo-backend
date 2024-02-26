import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssociationCreateInput } from "../../../inputs/AssociationCreateInput";
import { AssociationUpdateInput } from "../../../inputs/AssociationUpdateInput";
import { AssociationWhereUniqueInput } from "../../../inputs/AssociationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneAssociationArgs {
  @TypeGraphQL.Field(_type => AssociationWhereUniqueInput, {
    nullable: false
  })
  where!: AssociationWhereUniqueInput;

  @TypeGraphQL.Field(_type => AssociationCreateInput, {
    nullable: false
  })
  create!: AssociationCreateInput;

  @TypeGraphQL.Field(_type => AssociationUpdateInput, {
    nullable: false
  })
  update!: AssociationUpdateInput;
}
