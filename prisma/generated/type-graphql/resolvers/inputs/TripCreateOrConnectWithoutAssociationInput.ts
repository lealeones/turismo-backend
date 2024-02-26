import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateWithoutAssociationInput } from "../inputs/TripCreateWithoutAssociationInput";
import { TripWhereUniqueInput } from "../inputs/TripWhereUniqueInput";

@TypeGraphQL.InputType("TripCreateOrConnectWithoutAssociationInput", {})
export class TripCreateOrConnectWithoutAssociationInput {
  @TypeGraphQL.Field(_type => TripWhereUniqueInput, {
    nullable: false
  })
  where!: TripWhereUniqueInput;

  @TypeGraphQL.Field(_type => TripCreateWithoutAssociationInput, {
    nullable: false
  })
  create!: TripCreateWithoutAssociationInput;
}
