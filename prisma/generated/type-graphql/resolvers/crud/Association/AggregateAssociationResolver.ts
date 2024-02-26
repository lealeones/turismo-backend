import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateAssociationArgs } from "./args/AggregateAssociationArgs";
import { Association } from "../../../models/Association";
import { AggregateAssociation } from "../../outputs/AggregateAssociation";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Association)
export class AggregateAssociationResolver {
  @TypeGraphQL.Query(_returns => AggregateAssociation, {
    nullable: false
  })
  async aggregateAssociation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAssociationArgs): Promise<AggregateAssociation> {
    return getPrismaFromContext(ctx).association.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
