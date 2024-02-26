import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssociationCreateInput } from "../../../inputs/AssociationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneAssociationArgs {
  @TypeGraphQL.Field(_type => AssociationCreateInput, {
    nullable: false
  })
  data!: AssociationCreateInput;
}
