import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripAvgAggregate } from "../outputs/TripAvgAggregate";
import { TripCountAggregate } from "../outputs/TripCountAggregate";
import { TripMaxAggregate } from "../outputs/TripMaxAggregate";
import { TripMinAggregate } from "../outputs/TripMinAggregate";
import { TripSumAggregate } from "../outputs/TripSumAggregate";

@TypeGraphQL.ObjectType("TripGroupBy", {})
export class TripGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  startTime!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dscr!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  places!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  associationId!: number;

  @TypeGraphQL.Field(_type => TripCountAggregate, {
    nullable: true
  })
  _count!: TripCountAggregate | null;

  @TypeGraphQL.Field(_type => TripAvgAggregate, {
    nullable: true
  })
  _avg!: TripAvgAggregate | null;

  @TypeGraphQL.Field(_type => TripSumAggregate, {
    nullable: true
  })
  _sum!: TripSumAggregate | null;

  @TypeGraphQL.Field(_type => TripMinAggregate, {
    nullable: true
  })
  _min!: TripMinAggregate | null;

  @TypeGraphQL.Field(_type => TripMaxAggregate, {
    nullable: true
  })
  _max!: TripMaxAggregate | null;
}
