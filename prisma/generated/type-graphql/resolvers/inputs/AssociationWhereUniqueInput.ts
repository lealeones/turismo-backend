import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssociationWhereInput } from "../inputs/AssociationWhereInput";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TripListRelationFilter } from "../inputs/TripListRelationFilter";

@TypeGraphQL.InputType("AssociationWhereUniqueInput", {})
export class AssociationWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [AssociationWhereInput], {
    nullable: true
  })
  AND?: AssociationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssociationWhereInput], {
    nullable: true
  })
  OR?: AssociationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssociationWhereInput], {
    nullable: true
  })
  NOT?: AssociationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  dsrc?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  urlImage?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => TripListRelationFilter, {
    nullable: true
  })
  trips?: TripListRelationFilter | undefined;
}
