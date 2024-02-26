import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Association } from "../models/Association";
import { Ticket } from "../models/Ticket";
import { TripCount } from "../resolvers/outputs/TripCount";

@TypeGraphQL.ObjectType("Trip", {})
export class Trip {
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

  tickets?: Ticket[];

  association?: Association;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  associationId!: number;

  @TypeGraphQL.Field(_type => TripCount, {
    nullable: true
  })
  _count?: TripCount | null;
}
