import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
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

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  isAdult?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  dni?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  status?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  tripId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => TripRelationFilter, {
    nullable: true
  })
  trip?: TripRelationFilter | undefined;
}
