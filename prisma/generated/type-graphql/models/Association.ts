import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Trip } from "../models/Trip";
import { AssociationCount } from "../resolvers/outputs/AssociationCount";

@TypeGraphQL.ObjectType("Association", {})
export class Association {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dsrc!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  urlImage!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  trips?: Trip[];

  @TypeGraphQL.Field(_type => AssociationCount, {
    nullable: true
  })
  _count?: AssociationCount | null;
}
