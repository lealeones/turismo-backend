import * as TypeGraphQL from "type-graphql";

export enum TicketScalarFieldEnum {
  id = "id",
  name = "name",
  isAdult = "isAdult",
  dni = "dni",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  status = "status",
  tripId = "tripId"
}
TypeGraphQL.registerEnumType(TicketScalarFieldEnum, {
  name: "TicketScalarFieldEnum",
  description: undefined,
});
