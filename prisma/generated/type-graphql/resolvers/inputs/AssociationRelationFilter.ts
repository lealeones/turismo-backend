import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssociationWhereInput } from "../inputs/AssociationWhereInput";

@TypeGraphQL.InputType("AssociationRelationFilter", {})
export class AssociationRelationFilter {
  @TypeGraphQL.Field(_type => AssociationWhereInput, {
    nullable: true
  })
  is?: AssociationWhereInput | undefined;

  @TypeGraphQL.Field(_type => AssociationWhereInput, {
    nullable: true
  })
  isNot?: AssociationWhereInput | undefined;
}
