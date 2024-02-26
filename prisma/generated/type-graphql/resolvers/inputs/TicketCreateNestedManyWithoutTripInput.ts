import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TicketCreateManyTripInputEnvelope } from "../inputs/TicketCreateManyTripInputEnvelope";
import { TicketCreateOrConnectWithoutTripInput } from "../inputs/TicketCreateOrConnectWithoutTripInput";
import { TicketCreateWithoutTripInput } from "../inputs/TicketCreateWithoutTripInput";
import { TicketWhereUniqueInput } from "../inputs/TicketWhereUniqueInput";

@TypeGraphQL.InputType("TicketCreateNestedManyWithoutTripInput", {})
export class TicketCreateNestedManyWithoutTripInput {
  @TypeGraphQL.Field(_type => [TicketCreateWithoutTripInput], {
    nullable: true
  })
  create?: TicketCreateWithoutTripInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketCreateOrConnectWithoutTripInput], {
    nullable: true
  })
  connectOrCreate?: TicketCreateOrConnectWithoutTripInput[] | undefined;

  @TypeGraphQL.Field(_type => TicketCreateManyTripInputEnvelope, {
    nullable: true
  })
  createMany?: TicketCreateManyTripInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TicketWhereUniqueInput], {
    nullable: true
  })
  connect?: TicketWhereUniqueInput[] | undefined;
}
