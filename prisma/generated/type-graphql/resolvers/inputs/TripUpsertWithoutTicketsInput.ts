import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateWithoutTicketsInput } from "../inputs/TripCreateWithoutTicketsInput";
import { TripUpdateWithoutTicketsInput } from "../inputs/TripUpdateWithoutTicketsInput";
import { TripWhereInput } from "../inputs/TripWhereInput";

@TypeGraphQL.InputType("TripUpsertWithoutTicketsInput", {})
export class TripUpsertWithoutTicketsInput {
  @TypeGraphQL.Field(_type => TripUpdateWithoutTicketsInput, {
    nullable: false
  })
  update!: TripUpdateWithoutTicketsInput;

  @TypeGraphQL.Field(_type => TripCreateWithoutTicketsInput, {
    nullable: false
  })
  create!: TripCreateWithoutTicketsInput;

  @TypeGraphQL.Field(_type => TripWhereInput, {
    nullable: true
  })
  where?: TripWhereInput | undefined;
}
