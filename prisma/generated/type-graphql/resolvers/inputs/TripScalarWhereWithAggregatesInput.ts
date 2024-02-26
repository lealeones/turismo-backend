import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("TripScalarWhereWithAggregatesInput", {})
export class TripScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TripScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TripScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TripScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TripScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  startTime?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  title?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  dscr?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  places?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  associationId?: IntWithAggregatesFilter | undefined;
}
