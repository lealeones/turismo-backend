import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TicketUpdateManyMutationInput } from "../../../inputs/TicketUpdateManyMutationInput";
import { TicketWhereInput } from "../../../inputs/TicketWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTicketArgs {
  @TypeGraphQL.Field(_type => TicketUpdateManyMutationInput, {
    nullable: false
  })
  data!: TicketUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TicketWhereInput, {
    nullable: true
  })
  where?: TicketWhereInput | undefined;
}
