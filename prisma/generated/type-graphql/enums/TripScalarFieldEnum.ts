import * as TypeGraphQL from "type-graphql";

export enum TripScalarFieldEnum {
  id = "id",
  startTime = "startTime",
  title = "title",
  dscr = "dscr",
  places = "places",
  associationId = "associationId"
}
TypeGraphQL.registerEnumType(TripScalarFieldEnum, {
  name: "TripScalarFieldEnum",
  description: undefined,
});
