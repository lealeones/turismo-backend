import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TicketUpdateInput } from "../../../inputs/TicketUpdateInput";
import { TicketWhereUniqueInput } from "../../../inputs/TicketWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneTicketArgs {
  @TypeGraphQL.Field(_type => TicketUpdateInput, {
    nullable: false
  })
  data!: TicketUpdateInput;

  @TypeGraphQL.Field(_type => TicketWhereUniqueInput, {
    nullable: false
  })
  where!: TicketWhereUniqueInput;
}
