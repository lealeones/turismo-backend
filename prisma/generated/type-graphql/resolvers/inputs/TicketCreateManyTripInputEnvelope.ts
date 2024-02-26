import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TicketCreateManyTripInput } from "../inputs/TicketCreateManyTripInput";

@TypeGraphQL.InputType("TicketCreateManyTripInputEnvelope", {})
export class TicketCreateManyTripInputEnvelope {
  @TypeGraphQL.Field(_type => [TicketCreateManyTripInput], {
    nullable: false
  })
  data!: TicketCreateManyTripInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
