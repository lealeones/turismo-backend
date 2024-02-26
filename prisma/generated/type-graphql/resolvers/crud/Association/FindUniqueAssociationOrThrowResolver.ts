import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueAssociationOrThrowArgs } from "./args/FindUniqueAssociationOrThrowArgs";
import { Association } from "../../../models/Association";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Association)
export class FindUniqueAssociationOrThrowResolver {
  @TypeGraphQL.Query(_returns => Association, {
    nullable: true
  })
  async getAssociation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueAssociationOrThrowArgs): Promise<Association | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).association.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
