import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssociationRelationFilter } from "../inputs/AssociationRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TicketListRelationFilter } from "../inputs/TicketListRelationFilter";
import { TripWhereInput } from "../inputs/TripWhereInput";

@TypeGraphQL.InputType("TripWhereUniqueInput", {})
export class TripWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [TripWhereInput], {
    nullable: true
  })
  AND?: TripWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripWhereInput], {
    nullable: true
  })
  OR?: TripWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripWhereInput], {
    nullable: true
  })
  NOT?: TripWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => TicketListRelationFilter, {
    nullable: true
  })
  tickets?: TicketListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => AssociationRelationFilter, {
    nullable: true
  })
  association?: AssociationRelationFilter | undefined;
}
