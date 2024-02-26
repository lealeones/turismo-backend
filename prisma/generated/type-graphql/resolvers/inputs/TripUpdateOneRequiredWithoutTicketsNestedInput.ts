import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateOrConnectWithoutTicketsInput } from "../inputs/TripCreateOrConnectWithoutTicketsInput";
import { TripCreateWithoutTicketsInput } from "../inputs/TripCreateWithoutTicketsInput";
import { TripUpdateToOneWithWhereWithoutTicketsInput } from "../inputs/TripUpdateToOneWithWhereWithoutTicketsInput";
import { TripUpsertWithoutTicketsInput } from "../inputs/TripUpsertWithoutTicketsInput";
import { TripWhereUniqueInput } from "../inputs/TripWhereUniqueInput";

@TypeGraphQL.InputType("TripUpdateOneRequiredWithoutTicketsNestedInput", {})
export class TripUpdateOneRequiredWithoutTicketsNestedInput {
  @TypeGraphQL.Field(_type => TripCreateWithoutTicketsInput, {
    nullable: true
  })
  create?: TripCreateWithoutTicketsInput | undefined;

  @TypeGraphQL.Field(_type => TripCreateOrConnectWithoutTicketsInput, {
    nullable: true
  })
  connectOrCreate?: TripCreateOrConnectWithoutTicketsInput | undefined;

  @TypeGraphQL.Field(_type => TripUpsertWithoutTicketsInput, {
    nullable: true
  })
  upsert?: TripUpsertWithoutTicketsInput | undefined;

  @TypeGraphQL.Field(_type => TripWhereUniqueInput, {
    nullable: true
  })
  connect?: TripWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TripUpdateToOneWithWhereWithoutTicketsInput, {
    nullable: true
  })
  update?: TripUpdateToOneWithWhereWithoutTicketsInput | undefined;
}
