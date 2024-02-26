import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateManyAssociationInputEnvelope } from "../inputs/TripCreateManyAssociationInputEnvelope";
import { TripCreateOrConnectWithoutAssociationInput } from "../inputs/TripCreateOrConnectWithoutAssociationInput";
import { TripCreateWithoutAssociationInput } from "../inputs/TripCreateWithoutAssociationInput";
import { TripScalarWhereInput } from "../inputs/TripScalarWhereInput";
import { TripUpdateManyWithWhereWithoutAssociationInput } from "../inputs/TripUpdateManyWithWhereWithoutAssociationInput";
import { TripUpdateWithWhereUniqueWithoutAssociationInput } from "../inputs/TripUpdateWithWhereUniqueWithoutAssociationInput";
import { TripUpsertWithWhereUniqueWithoutAssociationInput } from "../inputs/TripUpsertWithWhereUniqueWithoutAssociationInput";
import { TripWhereUniqueInput } from "../inputs/TripWhereUniqueInput";

@TypeGraphQL.InputType("TripUpdateManyWithoutAssociationNestedInput", {})
export class TripUpdateManyWithoutAssociationNestedInput {
  @TypeGraphQL.Field(_type => [TripCreateWithoutAssociationInput], {
    nullable: true
  })
  create?: TripCreateWithoutAssociationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripCreateOrConnectWithoutAssociationInput], {
    nullable: true
  })
  connectOrCreate?: TripCreateOrConnectWithoutAssociationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripUpsertWithWhereUniqueWithoutAssociationInput], {
    nullable: true
  })
  upsert?: TripUpsertWithWhereUniqueWithoutAssociationInput[] | undefined;

  @TypeGraphQL.Field(_type => TripCreateManyAssociationInputEnvelope, {
    nullable: true
  })
  createMany?: TripCreateManyAssociationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TripWhereUniqueInput], {
    nullable: true
  })
  set?: TripWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TripWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripWhereUniqueInput], {
    nullable: true
  })
  delete?: TripWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripWhereUniqueInput], {
    nullable: true
  })
  connect?: TripWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripUpdateWithWhereUniqueWithoutAssociationInput], {
    nullable: true
  })
  update?: TripUpdateWithWhereUniqueWithoutAssociationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripUpdateManyWithWhereWithoutAssociationInput], {
    nullable: true
  })
  updateMany?: TripUpdateManyWithWhereWithoutAssociationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TripScalarWhereInput[] | undefined;
}
