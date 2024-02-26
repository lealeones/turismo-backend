import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Association } from "../../../models/Association";
import { Trip } from "../../../models/Trip";
import { AssociationTripsArgs } from "./args/AssociationTripsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Association)
export class AssociationRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Trip], {
    nullable: false
  })
  async trips(@TypeGraphQL.Root() association: Association, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AssociationTripsArgs): Promise<Trip[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).association.findUniqueOrThrow({
      where: {
        id: association.id,
      },
    }).trips({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
