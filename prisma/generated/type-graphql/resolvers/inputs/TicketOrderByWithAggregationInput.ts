import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { TicketAvgOrderByAggregateInput } from "../inputs/TicketAvgOrderByAggregateInput";
import { TicketCountOrderByAggregateInput } from "../inputs/TicketCountOrderByAggregateInput";
import { TicketMaxOrderByAggregateInput } from "../inputs/TicketMaxOrderByAggregateInput";
import { TicketMinOrderByAggregateInput } from "../inputs/TicketMinOrderByAggregateInput";
import { TicketSumOrderByAggregateInput } from "../inputs/TicketSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TicketOrderByWithAggregationInput", {})
export class TicketOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  name?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  isAdult?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  dni?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  createdAt?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updatedAt?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  status?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tripId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TicketCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TicketCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TicketAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: TicketAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TicketMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TicketMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TicketMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TicketMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TicketSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: TicketSumOrderByAggregateInput | undefined;
}
