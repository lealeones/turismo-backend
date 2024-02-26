import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TicketCreateInput } from "../../../inputs/TicketCreateInput";
import { TicketUpdateInput } from "../../../inputs/TicketUpdateInput";
import { TicketWhereUniqueInput } from "../../../inputs/TicketWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneTicketArgs {
  @TypeGraphQL.Field(_type => TicketWhereUniqueInput, {
    nullable: false
  })
  where!: TicketWhereUniqueInput;

  @TypeGraphQL.Field(_type => TicketCreateInput, {
    nullable: false
  })
  create!: TicketCreateInput;

  @TypeGraphQL.Field(_type => TicketUpdateInput, {
    nullable: false
  })
  update!: TicketUpdateInput;
}
