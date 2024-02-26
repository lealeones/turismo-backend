import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateNestedManyWithoutAssociationInput } from "../inputs/TripCreateNestedManyWithoutAssociationInput";

@TypeGraphQL.InputType("AssociationCreateInput", {})
export class AssociationCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dsrc!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  urlImage!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => TripCreateNestedManyWithoutAssociationInput, {
    nullable: true
  })
  trips?: TripCreateNestedManyWithoutAssociationInput | undefined;
}
