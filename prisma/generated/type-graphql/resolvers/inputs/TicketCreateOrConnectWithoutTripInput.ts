import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TicketCreateWithoutTripInput } from "../inputs/TicketCreateWithoutTripInput";
import { TicketWhereUniqueInput } from "../inputs/TicketWhereUniqueInput";

@TypeGraphQL.InputType("TicketCreateOrConnectWithoutTripInput", {})
export class TicketCreateOrConnectWithoutTripInput {
  @TypeGraphQL.Field(_type => TicketWhereUniqueInput, {
    nullable: false
  })
  where!: TicketWhereUniqueInput;

  @TypeGraphQL.Field(_type => TicketCreateWithoutTripInput, {
    nullable: false
  })
  create!: TicketCreateWithoutTripInput;
}
