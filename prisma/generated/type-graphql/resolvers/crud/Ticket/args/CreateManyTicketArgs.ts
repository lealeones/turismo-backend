import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TicketCreateManyInput } from "../../../inputs/TicketCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTicketArgs {
  @TypeGraphQL.Field(_type => [TicketCreateManyInput], {
    nullable: false
  })
  data!: TicketCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
