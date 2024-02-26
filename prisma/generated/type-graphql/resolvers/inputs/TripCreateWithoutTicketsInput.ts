import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssociationCreateNestedOneWithoutTripsInput } from "../inputs/AssociationCreateNestedOneWithoutTripsInput";

@TypeGraphQL.InputType("TripCreateWithoutTicketsInput", {})
export class TripCreateWithoutTicketsInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  startTime!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dscr!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  places?: number | undefined;

  @TypeGraphQL.Field(_type => AssociationCreateNestedOneWithoutTripsInput, {
    nullable: false
  })
  association!: AssociationCreateNestedOneWithoutTripsInput;
}
