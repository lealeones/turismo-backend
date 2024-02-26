import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Association } from "../../../models/Association";
import { Ticket } from "../../../models/Ticket";
import { Trip } from "../../../models/Trip";
import { TripTicketsArgs } from "./args/TripTicketsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Trip)
export class TripRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Ticket], {
    nullable: false
  })
  async tickets(@TypeGraphQL.Root() trip: Trip, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TripTicketsArgs): Promise<Ticket[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).trip.findUniqueOrThrow({
      where: {
        id: trip.id,
      },
    }).tickets({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Association, {
    nullable: false
  })
  async association(@TypeGraphQL.Root() trip: Trip, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Association> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).trip.findUniqueOrThrow({
      where: {
        id: trip.id,
      },
    }).association({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
