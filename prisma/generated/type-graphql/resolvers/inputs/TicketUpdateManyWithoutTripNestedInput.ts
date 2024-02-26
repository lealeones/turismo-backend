import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TicketCreateManyTripInputEnvelope } from "../inputs/TicketCreateManyTripInputEnvelope";
import { TicketCreateOrConnectWithoutTripInput } from "../inputs/TicketCreateOrConnectWithoutTripInput";
import { TicketCreateWithoutTripInput } from "../inputs/TicketCreateWithoutTripInput";
import { TicketScalarWhereInput } from "../inputs/TicketScalarWhereInput";
import { TicketUpdateManyWithWhereWithoutTripInput } from "../inputs/TicketUpdateManyWithWhereWithoutTripInput";
import { TicketUpdateWithWhereUniqueWithoutTripInput } from "../inputs/TicketUpdateWithWhereUniqueWithoutTripInput";
import { TicketUpsertWithWhereUniqueWithoutTripInput } from "../inputs/TicketUpsertWithWhereUniqueWithoutTripInput";
import { TicketWhereUniqueInput } from "../inputs/TicketWhereUniqueInput";

@TypeGraphQL.InputType("TicketUpdateManyWithoutTripNestedInput", {})
export class TicketUpdateManyWithoutTripNestedInput {
  @TypeGraphQL.Field(_type => [TicketCreateWithoutTripInput], {
    nullable: true
  })
  create?: TicketCreateWithoutTripInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketCreateOrConnectWithoutTripInput], {
    nullable: true
  })
  connectOrCreate?: TicketCreateOrConnectWithoutTripInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketUpsertWithWhereUniqueWithoutTripInput], {
    nullable: true
  })
  upsert?: TicketUpsertWithWhereUniqueWithoutTripInput[] | undefined;

  @TypeGraphQL.Field(_type => TicketCreateManyTripInputEnvelope, {
    nullable: true
  })
  createMany?: TicketCreateManyTripInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TicketWhereUniqueInput], {
    nullable: true
  })
  set?: TicketWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TicketWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketWhereUniqueInput], {
    nullable: true
  })
  delete?: TicketWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketWhereUniqueInput], {
    nullable: true
  })
  connect?: TicketWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketUpdateWithWhereUniqueWithoutTripInput], {
    nullable: true
  })
  update?: TicketUpdateWithWhereUniqueWithoutTripInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketUpdateManyWithWhereWithoutTripInput], {
    nullable: true
  })
  updateMany?: TicketUpdateManyWithWhereWithoutTripInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TicketScalarWhereInput[] | undefined;
}
