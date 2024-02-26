import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssociationCreateOrConnectWithoutTripsInput } from "../inputs/AssociationCreateOrConnectWithoutTripsInput";
import { AssociationCreateWithoutTripsInput } from "../inputs/AssociationCreateWithoutTripsInput";
import { AssociationWhereUniqueInput } from "../inputs/AssociationWhereUniqueInput";

@TypeGraphQL.InputType("AssociationCreateNestedOneWithoutTripsInput", {})
export class AssociationCreateNestedOneWithoutTripsInput {
  @TypeGraphQL.Field(_type => AssociationCreateWithoutTripsInput, {
    nullable: true
  })
  create?: AssociationCreateWithoutTripsInput | undefined;

  @TypeGraphQL.Field(_type => AssociationCreateOrConnectWithoutTripsInput, {
    nullable: true
  })
  connectOrCreate?: AssociationCreateOrConnectWithoutTripsInput | undefined;

  @TypeGraphQL.Field(_type => AssociationWhereUniqueInput, {
    nullable: true
  })
  connect?: AssociationWhereUniqueInput | undefined;
}
