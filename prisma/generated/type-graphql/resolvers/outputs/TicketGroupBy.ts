import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TicketAvgAggregate } from "../outputs/TicketAvgAggregate";
import { TicketCountAggregate } from "../outputs/TicketCountAggregate";
import { TicketMaxAggregate } from "../outputs/TicketMaxAggregate";
import { TicketMinAggregate } from "../outputs/TicketMinAggregate";
import { TicketSumAggregate } from "../outputs/TicketSumAggregate";

@TypeGraphQL.ObjectType("TicketGroupBy", {})
export class TicketGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isAdult!: boolean;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  dni!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  status!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  tripId!: number;

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
