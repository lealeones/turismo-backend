import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateOrConnectWithoutTicketsInput } from "../inputs/TripCreateOrConnectWithoutTicketsInput";
import { TripCreateWithoutTicketsInput } from "../inputs/TripCreateWithoutTicketsInput";
import { TripWhereUniqueInput } from "../inputs/TripWhereUniqueInput";

@TypeGraphQL.InputType("TripCreateNestedOneWithoutTicketsInput", {})
export class TripCreateNestedOneWithoutTicketsInput {
  @TypeGraphQL.Field(_type => TripCreateWithoutTicketsInput, {
    nullable: true
  })
  create?: TripCreateWithoutTicketsInput | undefined;

  @TypeGraphQL.Field(_type => TripCreateOrConnectWithoutTicketsInput, {
    nullable: true
  })
  connectOrCreate?: TripCreateOrConnectWithoutTicketsInput | undefined;

  @TypeGraphQL.Field(_type => TripWhereUniqueInput, {
    nullable: true
  })
  connect?: TripWhereUniqueInput | undefined;
}
