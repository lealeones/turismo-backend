import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCountTicketsArgs } from "./args/TripCountTicketsArgs";

@TypeGraphQL.ObjectType("TripCount", {})
export class TripCount {
  tickets!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "tickets",
    nullable: false
  })
  getTickets(@TypeGraphQL.Root() root: TripCount, @TypeGraphQL.Args() args: TripCountTicketsArgs): number {
    return root.tickets;
  }
}
