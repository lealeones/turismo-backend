import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateTicketArgs } from "./args/AggregateTicketArgs";
import { Ticket } from "../../../models/Ticket";
import { AggregateTicket } from "../../outputs/AggregateTicket";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Ticket)
export class AggregateTicketResolver {
  @TypeGraphQL.Query(_returns => AggregateTicket, {
    nullable: false
  })
  async aggregateTicket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTicketArgs): Promise<AggregateTicket> {
    return getPrismaFromContext(ctx).ticket.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
