import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssociationCreateManyInput } from "../../../inputs/AssociationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAssociationArgs {
  @TypeGraphQL.Field(_type => [AssociationCreateManyInput], {
    nullable: false
  })
  data!: AssociationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
