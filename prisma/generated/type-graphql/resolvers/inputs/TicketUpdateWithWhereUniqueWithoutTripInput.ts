import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TicketUpdateWithoutTripInput } from "../inputs/TicketUpdateWithoutTripInput";
import { TicketWhereUniqueInput } from "../inputs/TicketWhereUniqueInput";

@TypeGraphQL.InputType("TicketUpdateWithWhereUniqueWithoutTripInput", {})
export class TicketUpdateWithWhereUniqueWithoutTripInput {
  @TypeGraphQL.Field(_type => TicketWhereUniqueInput, {
    nullable: false
  })
  where!: TicketWhereUniqueInput;

  @TypeGraphQL.Field(_type => TicketUpdateWithoutTripInput, {
    nullable: false
  })
  data!: TicketUpdateWithoutTripInput;
}
