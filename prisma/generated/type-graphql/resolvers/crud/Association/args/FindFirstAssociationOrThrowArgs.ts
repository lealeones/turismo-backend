import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssociationOrderByWithRelationInput } from "../../../inputs/AssociationOrderByWithRelationInput";
import { AssociationWhereInput } from "../../../inputs/AssociationWhereInput";
import { AssociationWhereUniqueInput } from "../../../inputs/AssociationWhereUniqueInput";
import { AssociationScalarFieldEnum } from "../../../../enums/AssociationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstAssociationOrThrowArgs {
  @TypeGraphQL.Field(_type => AssociationWhereInput, {
    nullable: true
  })
  where?: AssociationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AssociationOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: AssociationOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => AssociationWhereUniqueInput, {
    nullable: true
  })
  cursor?: AssociationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [AssociationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "dsrc" | "urlImage" | "createdAt" | "updatedAt"> | undefined;
}
