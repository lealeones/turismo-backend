import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssociationWhereInput } from "../../../inputs/AssociationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAssociationArgs {
  @TypeGraphQL.Field(_type => AssociationWhereInput, {
    nullable: true
  })
  where?: AssociationWhereInput | undefined;
}
