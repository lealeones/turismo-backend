import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssociationAvgAggregate } from "../outputs/AssociationAvgAggregate";
import { AssociationCountAggregate } from "../outputs/AssociationCountAggregate";
import { AssociationMaxAggregate } from "../outputs/AssociationMaxAggregate";
import { AssociationMinAggregate } from "../outputs/AssociationMinAggregate";
import { AssociationSumAggregate } from "../outputs/AssociationSumAggregate";

@TypeGraphQL.ObjectType("AggregateAssociation", {})
export class AggregateAssociation {
  @TypeGraphQL.Field(_type => AssociationCountAggregate, {
    nullable: true
  })
  _count!: AssociationCountAggregate | null;

  @TypeGraphQL.Field(_type => AssociationAvgAggregate, {
    nullable: true
  })
  _avg!: AssociationAvgAggregate | null;

  @TypeGraphQL.Field(_type => AssociationSumAggregate, {
    nullable: true
  })
  _sum!: AssociationSumAggregate | null;

  @TypeGraphQL.Field(_type => AssociationMinAggregate, {
    nullable: true
  })
  _min!: AssociationMinAggregate | null;

  @TypeGraphQL.Field(_type => AssociationMaxAggregate, {
    nullable: true
  })
  _max!: AssociationMaxAggregate | null;
}
