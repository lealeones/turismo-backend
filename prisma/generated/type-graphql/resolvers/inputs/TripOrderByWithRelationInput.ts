import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssociationOrderByWithRelationInput } from "../inputs/AssociationOrderByWithRelationInput";
import { TicketOrderByRelationAggregateInput } from "../inputs/TicketOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TripOrderByWithRelationInput", {})
export class TripOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  startTime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  dscr?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  places?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  associationId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TicketOrderByRelationAggregateInput, {
    nullable: true
  })
  tickets?: TicketOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AssociationOrderByWithRelationInput, {
    nullable: true
  })
  association?: AssociationOrderByWithRelationInput | undefined;
}
