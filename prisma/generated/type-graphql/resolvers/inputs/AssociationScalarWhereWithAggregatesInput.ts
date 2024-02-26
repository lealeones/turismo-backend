import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("AssociationScalarWhereWithAggregatesInput", {})
export class AssociationScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [AssociationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: AssociationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssociationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: AssociationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssociationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: AssociationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  dsrc?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  urlImage?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
