import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TicketCreateInput } from "../../../inputs/TicketCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTicketArgs {
  @TypeGraphQL.Field(_type => TicketCreateInput, {
    nullable: false
  })
  data!: TicketCreateInput;
}
