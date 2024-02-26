import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TicketWhereInput } from "../../inputs/TicketWhereInput";

@TypeGraphQL.ArgsType()
export class TripCountTicketsArgs {
  @TypeGraphQL.Field(_type => TicketWhereInput, {
    nullable: true
  })
  where?: TicketWhereInput | undefined;
}
