import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssociationWhereUniqueInput } from "../../../inputs/AssociationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueAssociationArgs {
  @TypeGraphQL.Field(_type => AssociationWhereUniqueInput, {
    nullable: false
  })
  where!: AssociationWhereUniqueInput;
}
