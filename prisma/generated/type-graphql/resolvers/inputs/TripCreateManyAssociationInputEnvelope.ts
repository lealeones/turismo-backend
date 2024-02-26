import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateManyAssociationInput } from "../inputs/TripCreateManyAssociationInput";

@TypeGraphQL.InputType("TripCreateManyAssociationInputEnvelope", {})
export class TripCreateManyAssociationInputEnvelope {
  @TypeGraphQL.Field(_type => [TripCreateManyAssociationInput], {
    nullable: false
  })
  data!: TripCreateManyAssociationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
