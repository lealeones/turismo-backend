import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("TripScalarWhereInput", {})
export class TripScalarWhereInput {
  @TypeGraphQL.Field(_type => [TripScalarWhereInput], {
    nullable: true
  })
  AND?: TripScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripScalarWhereInput], {
    nullable: true
  })
  OR?: TripScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripScalarWhereInput], {
    nullable: true
  })
  NOT?: TripScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  startTime?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  dscr?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  places?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  associationId?: IntFilter | undefined;
}
