import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TicketOrderByWithAggregationInput } from "../../../inputs/TicketOrderByWithAggregationInput";
import { TicketScalarWhereWithAggregatesInput } from "../../../inputs/TicketScalarWhereWithAggregatesInput";
import { TicketWhereInput } from "../../../inputs/TicketWhereInput";
import { TicketScalarFieldEnum } from "../../../../enums/TicketScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTicketArgs {
  @TypeGraphQL.Field(_type => TicketWhereInput, {
    nullable: true
  })
  where?: TicketWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TicketOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TicketOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "isAdult" | "dni" | "createdAt" | "updatedAt" | "status" | "tripId">;

  @TypeGraphQL.Field(_type => TicketScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TicketScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
