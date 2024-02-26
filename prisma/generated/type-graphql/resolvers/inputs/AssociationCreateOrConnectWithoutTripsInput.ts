import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssociationCreateWithoutTripsInput } from "../inputs/AssociationCreateWithoutTripsInput";
import { AssociationWhereUniqueInput } from "../inputs/AssociationWhereUniqueInput";

@TypeGraphQL.InputType("AssociationCreateOrConnectWithoutTripsInput", {})
export class AssociationCreateOrConnectWithoutTripsInput {
  @TypeGraphQL.Field(_type => AssociationWhereUniqueInput, {
    nullable: false
  })
  where!: AssociationWhereUniqueInput;

  @TypeGraphQL.Field(_type => AssociationCreateWithoutTripsInput, {
    nullable: false
  })
  create!: AssociationCreateWithoutTripsInput;
}
