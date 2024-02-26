import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssociationUpdateWithoutTripsInput } from "../inputs/AssociationUpdateWithoutTripsInput";
import { AssociationWhereInput } from "../inputs/AssociationWhereInput";

@TypeGraphQL.InputType("AssociationUpdateToOneWithWhereWithoutTripsInput", {})
export class AssociationUpdateToOneWithWhereWithoutTripsInput {
  @TypeGraphQL.Field(_type => AssociationWhereInput, {
    nullable: true
  })
  where?: AssociationWhereInput | undefined;

  @TypeGraphQL.Field(_type => AssociationUpdateWithoutTripsInput, {
    nullable: false
  })
  data!: AssociationUpdateWithoutTripsInput;
}
