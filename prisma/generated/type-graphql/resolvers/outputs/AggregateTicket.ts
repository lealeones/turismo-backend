import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TicketAvgAggregate } from "../outputs/TicketAvgAggregate";
import { TicketCountAggregate } from "../outputs/TicketCountAggregate";
import { TicketMaxAggregate } from "../outputs/TicketMaxAggregate";
import { TicketMinAggregate } from "../outputs/TicketMinAggregate";
import { TicketSumAggregate } from "../outputs/TicketSumAggregate";

@TypeGraphQL.ObjectType("AggregateTicket", {})
export class AggregateTicket {
  @TypeGraphQL.Field(_type => TicketCountAggregate, {
    nullable: true
  })
  _count!: TicketCountAggregate | null;

  @TypeGraphQL.Field(_type => TicketAvgAggregate, {
    nullable: true
  })
  _avg!: TicketAvgAggregate | null;

  @TypeGraphQL.Field(_type => TicketSumAggregate, {
    nullable: true
  })
  _sum!: TicketSumAggregate | null;

  @TypeGraphQL.Field(_type => TicketMinAggregate, {
    nullable: true
  })
  _min!: TicketMinAggregate | null;

  @TypeGraphQL.Field(_type => TicketMaxAggregate, {
    nullable: true
  })
  _max!: TicketMaxAggregate | null;
}
