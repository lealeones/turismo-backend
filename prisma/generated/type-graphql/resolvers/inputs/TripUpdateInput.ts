import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssociationUpdateOneRequiredWithoutTripsNestedInput } from "../inputs/AssociationUpdateOneRequiredWithoutTripsNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TicketUpdateManyWithoutTripNestedInput } from "../inputs/TicketUpdateManyWithoutTripNestedInput";

@TypeGraphQL.InputType("TripUpdateInput", {})
export class TripUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  startTime?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  dscr?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  places?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TicketUpdateManyWithoutTripNestedInput, {
    nullable: true
  })
  tickets?: TicketUpdateManyWithoutTripNestedInput | undefined;

  @TypeGraphQL.Field(_type => AssociationUpdateOneRequiredWithoutTripsNestedInput, {
    nullable: true
  })
  association?: AssociationUpdateOneRequiredWithoutTripsNestedInput | undefined;
}
