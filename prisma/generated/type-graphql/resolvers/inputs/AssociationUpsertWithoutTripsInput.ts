import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssociationCreateWithoutTripsInput } from "../inputs/AssociationCreateWithoutTripsInput";
import { AssociationUpdateWithoutTripsInput } from "../inputs/AssociationUpdateWithoutTripsInput";
import { AssociationWhereInput } from "../inputs/AssociationWhereInput";

@TypeGraphQL.InputType("AssociationUpsertWithoutTripsInput", {})
export class AssociationUpsertWithoutTripsInput {
  @TypeGraphQL.Field(_type => AssociationUpdateWithoutTripsInput, {
    nullable: false
  })
  update!: AssociationUpdateWithoutTripsInput;

  @TypeGraphQL.Field(_type => AssociationCreateWithoutTripsInput, {
    nullable: false
  })
  create!: AssociationCreateWithoutTripsInput;

  @TypeGraphQL.Field(_type => AssociationWhereInput, {
    nullable: true
  })
  where?: AssociationWhereInput | undefined;
}
