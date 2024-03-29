import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstAssociationOrThrowArgs } from "./args/FindFirstAssociationOrThrowArgs";
import { Association } from "../../../models/Association";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Association)
export class FindFirstAssociationOrThrowResolver {
  @TypeGraphQL.Query(_returns => Association, {
    nullable: true
  })
  async findFirstAssociationOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstAssociationOrThrowArgs): Promise<Association | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).association.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
