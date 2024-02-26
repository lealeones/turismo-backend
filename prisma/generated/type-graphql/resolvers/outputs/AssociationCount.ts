import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssociationCountTripsArgs } from "./args/AssociationCountTripsArgs";

@TypeGraphQL.ObjectType("AssociationCount", {})
export class AssociationCount {
  trips!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "trips",
    nullable: false
  })
  getTrips(@TypeGraphQL.Root() root: AssociationCount, @TypeGraphQL.Args() args: AssociationCountTripsArgs): number {
    return root.trips;
  }
}
