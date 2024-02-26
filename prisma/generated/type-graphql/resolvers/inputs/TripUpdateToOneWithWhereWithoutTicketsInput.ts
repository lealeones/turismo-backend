import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripUpdateWithoutTicketsInput } from "../inputs/TripUpdateWithoutTicketsInput";
import { TripWhereInput } from "../inputs/TripWhereInput";

@TypeGraphQL.InputType("TripUpdateToOneWithWhereWithoutTicketsInput", {})
export class TripUpdateToOneWithWhereWithoutTicketsInput {
  @TypeGraphQL.Field(_type => TripWhereInput, {
    nullable: true
  })
  where?: TripWhereInput | undefined;

  @TypeGraphQL.Field(_type => TripUpdateWithoutTicketsInput, {
    nullable: false
  })
  data!: TripUpdateWithoutTicketsInput;
}
