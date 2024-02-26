import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TicketScalarWhereInput } from "../inputs/TicketScalarWhereInput";
import { TicketUpdateManyMutationInput } from "../inputs/TicketUpdateManyMutationInput";

@TypeGraphQL.InputType("TicketUpdateManyWithWhereWithoutTripInput", {})
export class TicketUpdateManyWithWhereWithoutTripInput {
  @TypeGraphQL.Field(_type => TicketScalarWhereInput, {
    nullable: false
  })
  where!: TicketScalarWhereInput;

  @TypeGraphQL.Field(_type => TicketUpdateManyMutationInput, {
    nullable: false
  })
  data!: TicketUpdateManyMutationInput;
}
