import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TicketOrderByWithRelationInput } from "../../../inputs/TicketOrderByWithRelationInput";
import { TicketWhereInput } from "../../../inputs/TicketWhereInput";
import { TicketWhereUniqueInput } from "../../../inputs/TicketWhereUniqueInput";
import { TicketScalarFieldEnum } from "../../../../enums/TicketScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstTicketOrThrowArgs {
  @TypeGraphQL.Field(_type => TicketWhereInput, {
    nullable: true
  })
  where?: TicketWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TicketOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TicketOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TicketWhereUniqueInput, {
    nullable: true
  })
  cursor?: TicketWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TicketScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "isAdult" | "dni" | "createdAt" | "updatedAt" | "status" | "tripId"> | undefined;
}
