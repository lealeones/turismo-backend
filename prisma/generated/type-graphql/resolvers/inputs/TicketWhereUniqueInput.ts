import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TicketWhereInput } from "../inputs/TicketWhereInput";
import { TripRelationFilter } from "../inputs/TripRelationFilter";

@TypeGraphQL.InputType("TicketWhereUniqueInput", {})
export class TicketWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => [TicketWhereInput], {
    nullable: true
  })
  AND?: TicketWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketWhereInput], {
    nullable: true
  })
  OR?: TicketWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketWhereInput], {
    nullable: true
  })
  NOT?: TicketWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  isAdult?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  dni?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  createdAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updatedAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  status?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  tripId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => TripRelationFilter, {
    nullable: true
  })
  trip?: TripRelationFilter | undefined;
}
