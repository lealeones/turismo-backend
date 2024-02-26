import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateManyAssociationInputEnvelope } from "../inputs/TripCreateManyAssociationInputEnvelope";
import { TripCreateOrConnectWithoutAssociationInput } from "../inputs/TripCreateOrConnectWithoutAssociationInput";
import { TripCreateWithoutAssociationInput } from "../inputs/TripCreateWithoutAssociationInput";
import { TripWhereUniqueInput } from "../inputs/TripWhereUniqueInput";

@TypeGraphQL.InputType("TripCreateNestedManyWithoutAssociationInput", {})
export class TripCreateNestedManyWithoutAssociationInput {
  @TypeGraphQL.Field(_type => [TripCreateWithoutAssociationInput], {
    nullable: true
  })
  create?: TripCreateWithoutAssociationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripCreateOrConnectWithoutAssociationInput], {
    nullable: true
  })
  connectOrCreate?: TripCreateOrConnectWithoutAssociationInput[] | undefined;

  @TypeGraphQL.Field(_type => TripCreateManyAssociationInputEnvelope, {
    nullable: true
  })
  createMany?: TripCreateManyAssociationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TripWhereUniqueInput], {
    nullable: true
  })
  connect?: TripWhereUniqueInput[] | undefined;
}
