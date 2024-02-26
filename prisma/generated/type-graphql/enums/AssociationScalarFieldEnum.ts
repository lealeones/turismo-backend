import * as TypeGraphQL from "type-graphql";

export enum AssociationScalarFieldEnum {
  id = "id",
  name = "name",
  dsrc = "dsrc",
  urlImage = "urlImage",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(AssociationScalarFieldEnum, {
  name: "AssociationScalarFieldEnum",
  description: undefined,
});
