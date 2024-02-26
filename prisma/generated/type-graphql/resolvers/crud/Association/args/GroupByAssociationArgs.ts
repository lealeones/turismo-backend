import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssociationOrderByWithAggregationInput } from "../../../inputs/AssociationOrderByWithAggregationInput";
import { AssociationScalarWhereWithAggregatesInput } from "../../../inputs/AssociationScalarWhereWithAggregatesInput";
import { AssociationWhereInput } from "../../../inputs/AssociationWhereInput";
import { AssociationScalarFieldEnum } from "../../../../enums/AssociationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAssociationArgs {
  @TypeGraphQL.Field(_type => AssociationWhereInput, {
    nullable: true
  })
  where?: AssociationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AssociationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: AssociationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssociationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "dsrc" | "urlImage" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => AssociationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: AssociationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
