import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssociationCreateOrConnectWithoutTripsInput } from "../inputs/AssociationCreateOrConnectWithoutTripsInput";
import { AssociationCreateWithoutTripsInput } from "../inputs/AssociationCreateWithoutTripsInput";
import { AssociationUpdateToOneWithWhereWithoutTripsInput } from "../inputs/AssociationUpdateToOneWithWhereWithoutTripsInput";
import { AssociationUpsertWithoutTripsInput } from "../inputs/AssociationUpsertWithoutTripsInput";
import { AssociationWhereUniqueInput } from "../inputs/AssociationWhereUniqueInput";

@TypeGraphQL.InputType("AssociationUpdateOneRequiredWithoutTripsNestedInput", {})
export class AssociationUpdateOneRequiredWithoutTripsNestedInput {
  @TypeGraphQL.Field(_type => AssociationCreateWithoutTripsInput, {
    nullable: true
  })
  create?: AssociationCreateWithoutTripsInput | undefined;

  @TypeGraphQL.Field(_type => AssociationCreateOrConnectWithoutTripsInput, {
    nullable: true
  })
  connectOrCreate?: AssociationCreateOrConnectWithoutTripsInput | undefined;

  @TypeGraphQL.Field(_type => AssociationUpsertWithoutTripsInput, {
    nullable: true
  })
  upsert?: AssociationUpsertWithoutTripsInput | undefined;

  @TypeGraphQL.Field(_type => AssociationWhereUniqueInput, {
    nullable: true
  })
  connect?: AssociationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => AssociationUpdateToOneWithWhereWithoutTripsInput, {
    nullable: true
  })
  update?: AssociationUpdateToOneWithWhereWithoutTripsInput | undefined;
}
