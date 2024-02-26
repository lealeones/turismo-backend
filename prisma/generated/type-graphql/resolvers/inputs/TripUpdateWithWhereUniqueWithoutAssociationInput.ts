import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripUpdateWithoutAssociationInput } from "../inputs/TripUpdateWithoutAssociationInput";
import { TripWhereUniqueInput } from "../inputs/TripWhereUniqueInput";

@TypeGraphQL.InputType("TripUpdateWithWhereUniqueWithoutAssociationInput", {})
export class TripUpdateWithWhereUniqueWithoutAssociationInput {
  @TypeGraphQL.Field(_type => TripWhereUniqueInput, {
    nullable: false
  })
  where!: TripWhereUniqueInput;

  @TypeGraphQL.Field(_type => TripUpdateWithoutAssociationInput, {
    nullable: false
  })
  data!: TripUpdateWithoutAssociationInput;
}
