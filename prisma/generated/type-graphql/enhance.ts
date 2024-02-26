import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

export type MethodDecoratorOverrideFn = (decorators: MethodDecorator[]) => MethodDecorator[];

const crudResolversMap = {
  Ticket: crudResolvers.TicketCrudResolver,
  Trip: crudResolvers.TripCrudResolver,
  Association: crudResolvers.AssociationCrudResolver,
  User: crudResolvers.UserCrudResolver,
  Post: crudResolvers.PostCrudResolver
};
const actionResolversMap = {
  Ticket: {
    aggregateTicket: actionResolvers.AggregateTicketResolver,
    createManyTicket: actionResolvers.CreateManyTicketResolver,
    createOneTicket: actionResolvers.CreateOneTicketResolver,
    deleteManyTicket: actionResolvers.DeleteManyTicketResolver,
    deleteOneTicket: actionResolvers.DeleteOneTicketResolver,
    findFirstTicket: actionResolvers.FindFirstTicketResolver,
    findFirstTicketOrThrow: actionResolvers.FindFirstTicketOrThrowResolver,
    tickets: actionResolvers.FindManyTicketResolver,
    ticket: actionResolvers.FindUniqueTicketResolver,
    getTicket: actionResolvers.FindUniqueTicketOrThrowResolver,
    groupByTicket: actionResolvers.GroupByTicketResolver,
    updateManyTicket: actionResolvers.UpdateManyTicketResolver,
    updateOneTicket: actionResolvers.UpdateOneTicketResolver,
    upsertOneTicket: actionResolvers.UpsertOneTicketResolver
  },
  Trip: {
    aggregateTrip: actionResolvers.AggregateTripResolver,
    createManyTrip: actionResolvers.CreateManyTripResolver,
    createOneTrip: actionResolvers.CreateOneTripResolver,
    deleteManyTrip: actionResolvers.DeleteManyTripResolver,
    deleteOneTrip: actionResolvers.DeleteOneTripResolver,
    findFirstTrip: actionResolvers.FindFirstTripResolver,
    findFirstTripOrThrow: actionResolvers.FindFirstTripOrThrowResolver,
    trips: actionResolvers.FindManyTripResolver,
    trip: actionResolvers.FindUniqueTripResolver,
    getTrip: actionResolvers.FindUniqueTripOrThrowResolver,
    groupByTrip: actionResolvers.GroupByTripResolver,
    updateManyTrip: actionResolvers.UpdateManyTripResolver,
    updateOneTrip: actionResolvers.UpdateOneTripResolver,
    upsertOneTrip: actionResolvers.UpsertOneTripResolver
  },
  Association: {
    aggregateAssociation: actionResolvers.AggregateAssociationResolver,
    createManyAssociation: actionResolvers.CreateManyAssociationResolver,
    createOneAssociation: actionResolvers.CreateOneAssociationResolver,
    deleteManyAssociation: actionResolvers.DeleteManyAssociationResolver,
    deleteOneAssociation: actionResolvers.DeleteOneAssociationResolver,
    findFirstAssociation: actionResolvers.FindFirstAssociationResolver,
    findFirstAssociationOrThrow: actionResolvers.FindFirstAssociationOrThrowResolver,
    associations: actionResolvers.FindManyAssociationResolver,
    association: actionResolvers.FindUniqueAssociationResolver,
    getAssociation: actionResolvers.FindUniqueAssociationOrThrowResolver,
    groupByAssociation: actionResolvers.GroupByAssociationResolver,
    updateManyAssociation: actionResolvers.UpdateManyAssociationResolver,
    updateOneAssociation: actionResolvers.UpdateOneAssociationResolver,
    upsertOneAssociation: actionResolvers.UpsertOneAssociationResolver
  },
  User: {
    aggregateUser: actionResolvers.AggregateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    createOneUser: actionResolvers.CreateOneUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    deleteOneUser: actionResolvers.DeleteOneUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
    users: actionResolvers.FindManyUserResolver,
    user: actionResolvers.FindUniqueUserResolver,
    getUser: actionResolvers.FindUniqueUserOrThrowResolver,
    groupByUser: actionResolvers.GroupByUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    updateOneUser: actionResolvers.UpdateOneUserResolver,
    upsertOneUser: actionResolvers.UpsertOneUserResolver
  },
  Post: {
    aggregatePost: actionResolvers.AggregatePostResolver,
    createManyPost: actionResolvers.CreateManyPostResolver,
    createOnePost: actionResolvers.CreateOnePostResolver,
    deleteManyPost: actionResolvers.DeleteManyPostResolver,
    deleteOnePost: actionResolvers.DeleteOnePostResolver,
    findFirstPost: actionResolvers.FindFirstPostResolver,
    findFirstPostOrThrow: actionResolvers.FindFirstPostOrThrowResolver,
    posts: actionResolvers.FindManyPostResolver,
    post: actionResolvers.FindUniquePostResolver,
    getPost: actionResolvers.FindUniquePostOrThrowResolver,
    groupByPost: actionResolvers.GroupByPostResolver,
    updateManyPost: actionResolvers.UpdateManyPostResolver,
    updateOnePost: actionResolvers.UpdateOnePostResolver,
    upsertOnePost: actionResolvers.UpsertOnePostResolver
  }
};
const crudResolversInfo = {
  Ticket: ["aggregateTicket", "createManyTicket", "createOneTicket", "deleteManyTicket", "deleteOneTicket", "findFirstTicket", "findFirstTicketOrThrow", "tickets", "ticket", "getTicket", "groupByTicket", "updateManyTicket", "updateOneTicket", "upsertOneTicket"],
  Trip: ["aggregateTrip", "createManyTrip", "createOneTrip", "deleteManyTrip", "deleteOneTrip", "findFirstTrip", "findFirstTripOrThrow", "trips", "trip", "getTrip", "groupByTrip", "updateManyTrip", "updateOneTrip", "upsertOneTrip"],
  Association: ["aggregateAssociation", "createManyAssociation", "createOneAssociation", "deleteManyAssociation", "deleteOneAssociation", "findFirstAssociation", "findFirstAssociationOrThrow", "associations", "association", "getAssociation", "groupByAssociation", "updateManyAssociation", "updateOneAssociation", "upsertOneAssociation"],
  User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
  Post: ["aggregatePost", "createManyPost", "createOnePost", "deleteManyPost", "deleteOnePost", "findFirstPost", "findFirstPostOrThrow", "posts", "post", "getPost", "groupByPost", "updateManyPost", "updateOnePost", "upsertOnePost"]
};
const argsInfo = {
  AggregateTicketArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyTicketArgs: ["data", "skipDuplicates"],
  CreateOneTicketArgs: ["data"],
  DeleteManyTicketArgs: ["where"],
  DeleteOneTicketArgs: ["where"],
  FindFirstTicketArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstTicketOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTicketArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueTicketArgs: ["where"],
  FindUniqueTicketOrThrowArgs: ["where"],
  GroupByTicketArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyTicketArgs: ["data", "where"],
  UpdateOneTicketArgs: ["data", "where"],
  UpsertOneTicketArgs: ["where", "create", "update"],
  AggregateTripArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyTripArgs: ["data", "skipDuplicates"],
  CreateOneTripArgs: ["data"],
  DeleteManyTripArgs: ["where"],
  DeleteOneTripArgs: ["where"],
  FindFirstTripArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstTripOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTripArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueTripArgs: ["where"],
  FindUniqueTripOrThrowArgs: ["where"],
  GroupByTripArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyTripArgs: ["data", "where"],
  UpdateOneTripArgs: ["data", "where"],
  UpsertOneTripArgs: ["where", "create", "update"],
  AggregateAssociationArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyAssociationArgs: ["data", "skipDuplicates"],
  CreateOneAssociationArgs: ["data"],
  DeleteManyAssociationArgs: ["where"],
  DeleteOneAssociationArgs: ["where"],
  FindFirstAssociationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstAssociationOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyAssociationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueAssociationArgs: ["where"],
  FindUniqueAssociationOrThrowArgs: ["where"],
  GroupByAssociationArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyAssociationArgs: ["data", "where"],
  UpdateOneAssociationArgs: ["data", "where"],
  UpsertOneAssociationArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  CreateOneUserArgs: ["data"],
  DeleteManyUserArgs: ["where"],
  DeleteOneUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserArgs: ["where"],
  FindUniqueUserOrThrowArgs: ["where"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserArgs: ["data", "where"],
  UpdateOneUserArgs: ["data", "where"],
  UpsertOneUserArgs: ["where", "create", "update"],
  AggregatePostArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyPostArgs: ["data", "skipDuplicates"],
  CreateOnePostArgs: ["data"],
  DeleteManyPostArgs: ["where"],
  DeleteOnePostArgs: ["where"],
  FindFirstPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstPostOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniquePostArgs: ["where"],
  FindUniquePostOrThrowArgs: ["where"],
  GroupByPostArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyPostArgs: ["data", "where"],
  UpdateOnePostArgs: ["data", "where"],
  UpsertOnePostArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & {
    _all?: MethodDecorator[];
    _query?: MethodDecorator[];
    _mutation?: MethodDecorator[];
  };

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  const mutationOperationPrefixes = [
    "createOne", "createMany", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
  ];
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    const allActionsDecorators = resolverActionsConfig._all;
    const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
    for (const resolverActionName of resolverActionNames) {
      const maybeDecoratorsOrFn = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
      const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
      const mainDecorators = [
        ...allActionsDecorators ?? [],
        ...operationKindDecorators ?? [],
      ]
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(mainDecorators);
      } else {
        decorators = [...mainDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Ticket: relationResolvers.TicketRelationsResolver,
  Trip: relationResolvers.TripRelationsResolver,
  Association: relationResolvers.AssociationRelationsResolver,
  User: relationResolvers.UserRelationsResolver,
  Post: relationResolvers.PostRelationsResolver
};
const relationResolversInfo = {
  Ticket: ["trip"],
  Trip: ["tickets", "association"],
  Association: ["trips"],
  User: ["posts"],
  Post: ["author"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & { _all?: MethodDecorator[] };

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    const allActionsDecorators = relationResolverActionsConfig._all ?? [];
    const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
    for (const relationResolverActionName of relationResolverActionNames) {
      const maybeDecoratorsOrFn = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allActionsDecorators);
      } else {
        decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

export type PropertyDecoratorOverrideFn = (decorators: PropertyDecorator[]) => PropertyDecorator[];

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys, PropertyDecorator[] | PropertyDecoratorOverrideFn>
> & { _all?: PropertyDecorator[] };

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    const allFieldsDecorators = enhanceConfig.fields._all ?? [];
    for (const typeFieldName of typeFieldNames) {
      const maybeDecoratorsOrFn = enhanceConfig.fields[
        typeFieldName
      ] as PropertyDecorator[] | PropertyDecoratorOverrideFn | undefined;
      let decorators: PropertyDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allFieldsDecorators);
      } else {
        decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Ticket: ["id", "name", "isAdult", "dni", "createdAt", "updatedAt", "status", "tripId"],
  Trip: ["id", "startTime", "title", "dscr", "places", "associationId"],
  Association: ["id", "name", "dsrc", "urlImage", "createdAt", "updatedAt"],
  User: ["id", "email", "name"],
  Post: ["id", "createdAt", "updatedAt", "title", "content", "published", "viewCount", "authorId"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateTicket: ["_count", "_avg", "_sum", "_min", "_max"],
  TicketGroupBy: ["id", "name", "isAdult", "dni", "createdAt", "updatedAt", "status", "tripId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateTrip: ["_count", "_avg", "_sum", "_min", "_max"],
  TripGroupBy: ["id", "startTime", "title", "dscr", "places", "associationId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateAssociation: ["_count", "_avg", "_sum", "_min", "_max"],
  AssociationGroupBy: ["id", "name", "dsrc", "urlImage", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
  UserGroupBy: ["id", "email", "name", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePost: ["_count", "_avg", "_sum", "_min", "_max"],
  PostGroupBy: ["id", "createdAt", "updatedAt", "title", "content", "published", "viewCount", "authorId", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  TicketCountAggregate: ["id", "name", "isAdult", "dni", "createdAt", "updatedAt", "status", "tripId", "_all"],
  TicketAvgAggregate: ["dni", "tripId"],
  TicketSumAggregate: ["dni", "tripId"],
  TicketMinAggregate: ["id", "name", "isAdult", "dni", "createdAt", "updatedAt", "status", "tripId"],
  TicketMaxAggregate: ["id", "name", "isAdult", "dni", "createdAt", "updatedAt", "status", "tripId"],
  TripCount: ["tickets"],
  TripCountAggregate: ["id", "startTime", "title", "dscr", "places", "associationId", "_all"],
  TripAvgAggregate: ["id", "places", "associationId"],
  TripSumAggregate: ["id", "places", "associationId"],
  TripMinAggregate: ["id", "startTime", "title", "dscr", "places", "associationId"],
  TripMaxAggregate: ["id", "startTime", "title", "dscr", "places", "associationId"],
  AssociationCount: ["trips"],
  AssociationCountAggregate: ["id", "name", "dsrc", "urlImage", "createdAt", "updatedAt", "_all"],
  AssociationAvgAggregate: ["id"],
  AssociationSumAggregate: ["id"],
  AssociationMinAggregate: ["id", "name", "dsrc", "urlImage", "createdAt", "updatedAt"],
  AssociationMaxAggregate: ["id", "name", "dsrc", "urlImage", "createdAt", "updatedAt"],
  UserCount: ["posts"],
  UserCountAggregate: ["id", "email", "name", "_all"],
  UserAvgAggregate: ["id"],
  UserSumAggregate: ["id"],
  UserMinAggregate: ["id", "email", "name"],
  UserMaxAggregate: ["id", "email", "name"],
  PostCountAggregate: ["id", "createdAt", "updatedAt", "title", "content", "published", "viewCount", "authorId", "_all"],
  PostAvgAggregate: ["id", "viewCount", "authorId"],
  PostSumAggregate: ["id", "viewCount", "authorId"],
  PostMinAggregate: ["id", "createdAt", "updatedAt", "title", "content", "published", "viewCount", "authorId"],
  PostMaxAggregate: ["id", "createdAt", "updatedAt", "title", "content", "published", "viewCount", "authorId"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  TicketWhereInput: ["AND", "OR", "NOT", "id", "name", "isAdult", "dni", "createdAt", "updatedAt", "status", "tripId", "trip"],
  TicketOrderByWithRelationInput: ["id", "name", "isAdult", "dni", "createdAt", "updatedAt", "status", "tripId", "trip"],
  TicketWhereUniqueInput: ["id", "AND", "OR", "NOT", "name", "isAdult", "dni", "createdAt", "updatedAt", "status", "tripId", "trip"],
  TicketOrderByWithAggregationInput: ["id", "name", "isAdult", "dni", "createdAt", "updatedAt", "status", "tripId", "_count", "_avg", "_max", "_min", "_sum"],
  TicketScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "isAdult", "dni", "createdAt", "updatedAt", "status", "tripId"],
  TripWhereInput: ["AND", "OR", "NOT", "id", "startTime", "title", "dscr", "places", "associationId", "tickets", "association"],
  TripOrderByWithRelationInput: ["id", "startTime", "title", "dscr", "places", "associationId", "tickets", "association"],
  TripWhereUniqueInput: ["id", "AND", "OR", "NOT", "startTime", "title", "dscr", "places", "associationId", "tickets", "association"],
  TripOrderByWithAggregationInput: ["id", "startTime", "title", "dscr", "places", "associationId", "_count", "_avg", "_max", "_min", "_sum"],
  TripScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "startTime", "title", "dscr", "places", "associationId"],
  AssociationWhereInput: ["AND", "OR", "NOT", "id", "name", "dsrc", "urlImage", "createdAt", "updatedAt", "trips"],
  AssociationOrderByWithRelationInput: ["id", "name", "dsrc", "urlImage", "createdAt", "updatedAt", "trips"],
  AssociationWhereUniqueInput: ["id", "AND", "OR", "NOT", "name", "dsrc", "urlImage", "createdAt", "updatedAt", "trips"],
  AssociationOrderByWithAggregationInput: ["id", "name", "dsrc", "urlImage", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  AssociationScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "dsrc", "urlImage", "createdAt", "updatedAt"],
  UserWhereInput: ["AND", "OR", "NOT", "id", "email", "name", "posts"],
  UserOrderByWithRelationInput: ["id", "email", "name", "posts"],
  UserWhereUniqueInput: ["id", "email", "AND", "OR", "NOT", "name", "posts"],
  UserOrderByWithAggregationInput: ["id", "email", "name", "_count", "_avg", "_max", "_min", "_sum"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "name"],
  PostWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "content", "published", "viewCount", "authorId", "author"],
  PostOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "title", "content", "published", "viewCount", "authorId", "author"],
  PostWhereUniqueInput: ["id", "AND", "OR", "NOT", "createdAt", "updatedAt", "title", "content", "published", "viewCount", "authorId", "author"],
  PostOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "title", "content", "published", "viewCount", "authorId", "_count", "_avg", "_max", "_min", "_sum"],
  PostScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "content", "published", "viewCount", "authorId"],
  TicketCreateInput: ["id", "name", "isAdult", "dni", "createdAt", "updatedAt", "status", "trip"],
  TicketUpdateInput: ["id", "name", "isAdult", "dni", "createdAt", "updatedAt", "status", "trip"],
  TicketCreateManyInput: ["id", "name", "isAdult", "dni", "createdAt", "updatedAt", "status", "tripId"],
  TicketUpdateManyMutationInput: ["id", "name", "isAdult", "dni", "createdAt", "updatedAt", "status"],
  TripCreateInput: ["startTime", "title", "dscr", "places", "tickets", "association"],
  TripUpdateInput: ["startTime", "title", "dscr", "places", "tickets", "association"],
  TripCreateManyInput: ["id", "startTime", "title", "dscr", "places", "associationId"],
  TripUpdateManyMutationInput: ["startTime", "title", "dscr", "places"],
  AssociationCreateInput: ["name", "dsrc", "urlImage", "createdAt", "updatedAt", "trips"],
  AssociationUpdateInput: ["name", "dsrc", "urlImage", "createdAt", "updatedAt", "trips"],
  AssociationCreateManyInput: ["id", "name", "dsrc", "urlImage", "createdAt", "updatedAt"],
  AssociationUpdateManyMutationInput: ["name", "dsrc", "urlImage", "createdAt", "updatedAt"],
  UserCreateInput: ["email", "name", "posts"],
  UserUpdateInput: ["email", "name", "posts"],
  UserCreateManyInput: ["id", "email", "name"],
  UserUpdateManyMutationInput: ["email", "name"],
  PostCreateInput: ["createdAt", "updatedAt", "title", "content", "published", "viewCount", "author"],
  PostUpdateInput: ["createdAt", "updatedAt", "title", "content", "published", "viewCount", "author"],
  PostCreateManyInput: ["id", "createdAt", "updatedAt", "title", "content", "published", "viewCount", "authorId"],
  PostUpdateManyMutationInput: ["createdAt", "updatedAt", "title", "content", "published", "viewCount"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  BoolFilter: ["equals", "not"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  TripRelationFilter: ["is", "isNot"],
  TicketCountOrderByAggregateInput: ["id", "name", "isAdult", "dni", "createdAt", "updatedAt", "status", "tripId"],
  TicketAvgOrderByAggregateInput: ["dni", "tripId"],
  TicketMaxOrderByAggregateInput: ["id", "name", "isAdult", "dni", "createdAt", "updatedAt", "status", "tripId"],
  TicketMinOrderByAggregateInput: ["id", "name", "isAdult", "dni", "createdAt", "updatedAt", "status", "tripId"],
  TicketSumOrderByAggregateInput: ["dni", "tripId"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  TicketListRelationFilter: ["every", "some", "none"],
  AssociationRelationFilter: ["is", "isNot"],
  TicketOrderByRelationAggregateInput: ["_count"],
  TripCountOrderByAggregateInput: ["id", "startTime", "title", "dscr", "places", "associationId"],
  TripAvgOrderByAggregateInput: ["id", "places", "associationId"],
  TripMaxOrderByAggregateInput: ["id", "startTime", "title", "dscr", "places", "associationId"],
  TripMinOrderByAggregateInput: ["id", "startTime", "title", "dscr", "places", "associationId"],
  TripSumOrderByAggregateInput: ["id", "places", "associationId"],
  TripListRelationFilter: ["every", "some", "none"],
  TripOrderByRelationAggregateInput: ["_count"],
  AssociationCountOrderByAggregateInput: ["id", "name", "dsrc", "urlImage", "createdAt", "updatedAt"],
  AssociationAvgOrderByAggregateInput: ["id"],
  AssociationMaxOrderByAggregateInput: ["id", "name", "dsrc", "urlImage", "createdAt", "updatedAt"],
  AssociationMinOrderByAggregateInput: ["id", "name", "dsrc", "urlImage", "createdAt", "updatedAt"],
  AssociationSumOrderByAggregateInput: ["id"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  PostListRelationFilter: ["every", "some", "none"],
  SortOrderInput: ["sort", "nulls"],
  PostOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "email", "name"],
  UserAvgOrderByAggregateInput: ["id"],
  UserMaxOrderByAggregateInput: ["id", "email", "name"],
  UserMinOrderByAggregateInput: ["id", "email", "name"],
  UserSumOrderByAggregateInput: ["id"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  UserRelationFilter: ["is", "isNot"],
  PostCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title", "content", "published", "viewCount", "authorId"],
  PostAvgOrderByAggregateInput: ["id", "viewCount", "authorId"],
  PostMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title", "content", "published", "viewCount", "authorId"],
  PostMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title", "content", "published", "viewCount", "authorId"],
  PostSumOrderByAggregateInput: ["id", "viewCount", "authorId"],
  TripCreateNestedOneWithoutTicketsInput: ["create", "connectOrCreate", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  BoolFieldUpdateOperationsInput: ["set"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  TripUpdateOneRequiredWithoutTicketsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  TicketCreateNestedManyWithoutTripInput: ["create", "connectOrCreate", "createMany", "connect"],
  AssociationCreateNestedOneWithoutTripsInput: ["create", "connectOrCreate", "connect"],
  TicketUpdateManyWithoutTripNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  AssociationUpdateOneRequiredWithoutTripsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  TripCreateNestedManyWithoutAssociationInput: ["create", "connectOrCreate", "createMany", "connect"],
  TripUpdateManyWithoutAssociationNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  PostCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  PostUpdateManyWithoutAuthorNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutPostsInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutPostsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  TripCreateWithoutTicketsInput: ["startTime", "title", "dscr", "places", "association"],
  TripCreateOrConnectWithoutTicketsInput: ["where", "create"],
  TripUpsertWithoutTicketsInput: ["update", "create", "where"],
  TripUpdateToOneWithWhereWithoutTicketsInput: ["where", "data"],
  TripUpdateWithoutTicketsInput: ["startTime", "title", "dscr", "places", "association"],
  TicketCreateWithoutTripInput: ["id", "name", "isAdult", "dni", "createdAt", "updatedAt", "status"],
  TicketCreateOrConnectWithoutTripInput: ["where", "create"],
  TicketCreateManyTripInputEnvelope: ["data", "skipDuplicates"],
  AssociationCreateWithoutTripsInput: ["name", "dsrc", "urlImage", "createdAt", "updatedAt"],
  AssociationCreateOrConnectWithoutTripsInput: ["where", "create"],
  TicketUpsertWithWhereUniqueWithoutTripInput: ["where", "update", "create"],
  TicketUpdateWithWhereUniqueWithoutTripInput: ["where", "data"],
  TicketUpdateManyWithWhereWithoutTripInput: ["where", "data"],
  TicketScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "isAdult", "dni", "createdAt", "updatedAt", "status", "tripId"],
  AssociationUpsertWithoutTripsInput: ["update", "create", "where"],
  AssociationUpdateToOneWithWhereWithoutTripsInput: ["where", "data"],
  AssociationUpdateWithoutTripsInput: ["name", "dsrc", "urlImage", "createdAt", "updatedAt"],
  TripCreateWithoutAssociationInput: ["startTime", "title", "dscr", "places", "tickets"],
  TripCreateOrConnectWithoutAssociationInput: ["where", "create"],
  TripCreateManyAssociationInputEnvelope: ["data", "skipDuplicates"],
  TripUpsertWithWhereUniqueWithoutAssociationInput: ["where", "update", "create"],
  TripUpdateWithWhereUniqueWithoutAssociationInput: ["where", "data"],
  TripUpdateManyWithWhereWithoutAssociationInput: ["where", "data"],
  TripScalarWhereInput: ["AND", "OR", "NOT", "id", "startTime", "title", "dscr", "places", "associationId"],
  PostCreateWithoutAuthorInput: ["createdAt", "updatedAt", "title", "content", "published", "viewCount"],
  PostCreateOrConnectWithoutAuthorInput: ["where", "create"],
  PostCreateManyAuthorInputEnvelope: ["data", "skipDuplicates"],
  PostUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
  PostUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
  PostUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
  PostScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "content", "published", "viewCount", "authorId"],
  UserCreateWithoutPostsInput: ["email", "name"],
  UserCreateOrConnectWithoutPostsInput: ["where", "create"],
  UserUpsertWithoutPostsInput: ["update", "create", "where"],
  UserUpdateToOneWithWhereWithoutPostsInput: ["where", "data"],
  UserUpdateWithoutPostsInput: ["email", "name"],
  TicketCreateManyTripInput: ["id", "name", "isAdult", "dni", "createdAt", "updatedAt", "status"],
  TicketUpdateWithoutTripInput: ["id", "name", "isAdult", "dni", "createdAt", "updatedAt", "status"],
  TripCreateManyAssociationInput: ["id", "startTime", "title", "dscr", "places"],
  TripUpdateWithoutAssociationInput: ["startTime", "title", "dscr", "places", "tickets"],
  PostCreateManyAuthorInput: ["id", "createdAt", "updatedAt", "title", "content", "published", "viewCount"],
  PostUpdateWithoutAuthorInput: ["createdAt", "updatedAt", "title", "content", "published", "viewCount"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

