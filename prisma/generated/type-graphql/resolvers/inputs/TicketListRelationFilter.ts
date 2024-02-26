import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TicketWhereInput } from "../inputs/TicketWhereInput";

@TypeGraphQL.InputType("TicketListRelationFilter", {})
export class TicketListRelationFilter {
  @TypeGraphQL.Field(_type => TicketWhereInput, {
    nullable: true
  })
  every?: TicketWhereInput | undefined;

  @TypeGraphQL.Field(_type => TicketWhereInput, {
    nullable: true
  })
  some?: TicketWhereInput | undefined;

  @TypeGraphQL.Field(_type => TicketWhereInput, {
    nullable: true
  })
  none?: TicketWhereInput | undefined;
}
