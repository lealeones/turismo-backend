import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssociationAvgOrderByAggregateInput } from "../inputs/AssociationAvgOrderByAggregateInput";
import { AssociationCountOrderByAggregateInput } from "../inputs/AssociationCountOrderByAggregateInput";
import { AssociationMaxOrderByAggregateInput } from "../inputs/AssociationMaxOrderByAggregateInput";
import { AssociationMinOrderByAggregateInput } from "../inputs/AssociationMinOrderByAggregateInput";
import { AssociationSumOrderByAggregateInput } from "../inputs/AssociationSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AssociationOrderByWithAggregationInput", {})
export class AssociationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  dsrc?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  urlImage?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AssociationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: AssociationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AssociationAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: AssociationAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AssociationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: AssociationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AssociationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: AssociationMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AssociationSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: AssociationSumOrderByAggregateInput | undefined;
}
