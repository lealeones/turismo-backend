import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripAvgOrderByAggregateInput } from "../inputs/TripAvgOrderByAggregateInput";
import { TripCountOrderByAggregateInput } from "../inputs/TripCountOrderByAggregateInput";
import { TripMaxOrderByAggregateInput } from "../inputs/TripMaxOrderByAggregateInput";
import { TripMinOrderByAggregateInput } from "../inputs/TripMinOrderByAggregateInput";
import { TripSumOrderByAggregateInput } from "../inputs/TripSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TripOrderByWithAggregationInput", {})
export class TripOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => TripCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TripCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TripAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: TripAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TripMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TripMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TripMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TripMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TripSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: TripSumOrderByAggregateInput | undefined;
}
