import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateWithoutAssociationInput } from "../inputs/TripCreateWithoutAssociationInput";
import { TripUpdateWithoutAssociationInput } from "../inputs/TripUpdateWithoutAssociationInput";
import { TripWhereUniqueInput } from "../inputs/TripWhereUniqueInput";

@TypeGraphQL.InputType("TripUpsertWithWhereUniqueWithoutAssociationInput", {})
export class TripUpsertWithWhereUniqueWithoutAssociationInput {
  @TypeGraphQL.Field(_type => TripWhereUniqueInput, {
    nullable: false
  })
  where!: TripWhereUniqueInput;

  @TypeGraphQL.Field(_type => TripUpdateWithoutAssociationInput, {
    nullable: false
  })
  update!: TripUpdateWithoutAssociationInput;

  @TypeGraphQL.Field(_type => TripCreateWithoutAssociationInput, {
    nullable: false
  })
  create!: TripCreateWithoutAssociationInput;
}
