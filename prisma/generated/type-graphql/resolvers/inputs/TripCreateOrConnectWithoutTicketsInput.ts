import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateWithoutTicketsInput } from "../inputs/TripCreateWithoutTicketsInput";
import { TripWhereUniqueInput } from "../inputs/TripWhereUniqueInput";

@TypeGraphQL.InputType("TripCreateOrConnectWithoutTicketsInput", {})
export class TripCreateOrConnectWithoutTicketsInput {
  @TypeGraphQL.Field(_type => TripWhereUniqueInput, {
    nullable: false
  })
  where!: TripWhereUniqueInput;

  @TypeGraphQL.Field(_type => TripCreateWithoutTicketsInput, {
    nullable: false
  })
  create!: TripCreateWithoutTicketsInput;
}
