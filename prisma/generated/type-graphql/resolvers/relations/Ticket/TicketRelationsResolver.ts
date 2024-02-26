import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Ticket } from "../../../models/Ticket";
import { Trip } from "../../../models/Trip";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Ticket)
export class TicketRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Trip, {
    nullable: false
  })
  async trip(@TypeGraphQL.Root() ticket: Ticket, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Trip> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).ticket.findUniqueOrThrow({
      where: {
        id: ticket.id,
      },
    }).trip({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
