/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateGameRecordInput = {
  gameDate: string,
  gameType: GameType,
  location: string,
  tournamentPlace?: string | null,
  cashIn?: number | null,
  cashOut?: number | null,
  id?: string | null,
};

export enum GameType {
  CASH = "CASH",
  TOURNAMENT = "TOURNAMENT",
}


export type ModelGameRecordConditionInput = {
  gameDate?: ModelStringInput | null,
  gameType?: ModelGameTypeInput | null,
  location?: ModelStringInput | null,
  tournamentPlace?: ModelStringInput | null,
  cashIn?: ModelFloatInput | null,
  cashOut?: ModelFloatInput | null,
  and?: Array< ModelGameRecordConditionInput | null > | null,
  or?: Array< ModelGameRecordConditionInput | null > | null,
  not?: ModelGameRecordConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelGameTypeInput = {
  eq?: GameType | null,
  ne?: GameType | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type GameRecord = {
  __typename: "GameRecord",
  gameDate: string,
  gameType: GameType,
  location: string,
  tournamentPlace?: string | null,
  cashIn?: number | null,
  cashOut?: number | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateGameRecordInput = {
  gameDate?: string | null,
  gameType?: GameType | null,
  location?: string | null,
  tournamentPlace?: string | null,
  cashIn?: number | null,
  cashOut?: number | null,
  id: string,
};

export type DeleteGameRecordInput = {
  id: string,
};

export type ModelGameRecordFilterInput = {
  gameDate?: ModelStringInput | null,
  gameType?: ModelGameTypeInput | null,
  location?: ModelStringInput | null,
  tournamentPlace?: ModelStringInput | null,
  cashIn?: ModelFloatInput | null,
  cashOut?: ModelFloatInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelGameRecordFilterInput | null > | null,
  or?: Array< ModelGameRecordFilterInput | null > | null,
  not?: ModelGameRecordFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelGameRecordConnection = {
  __typename: "ModelGameRecordConnection",
  items:  Array<GameRecord | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionGameRecordFilterInput = {
  gameDate?: ModelSubscriptionStringInput | null,
  gameType?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  tournamentPlace?: ModelSubscriptionStringInput | null,
  cashIn?: ModelSubscriptionFloatInput | null,
  cashOut?: ModelSubscriptionFloatInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGameRecordFilterInput | null > | null,
  or?: Array< ModelSubscriptionGameRecordFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateGameRecordMutationVariables = {
  input: CreateGameRecordInput,
  condition?: ModelGameRecordConditionInput | null,
};

export type CreateGameRecordMutation = {
  createGameRecord?:  {
    __typename: "GameRecord",
    gameDate: string,
    gameType: GameType,
    location: string,
    tournamentPlace?: string | null,
    cashIn?: number | null,
    cashOut?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGameRecordMutationVariables = {
  input: UpdateGameRecordInput,
  condition?: ModelGameRecordConditionInput | null,
};

export type UpdateGameRecordMutation = {
  updateGameRecord?:  {
    __typename: "GameRecord",
    gameDate: string,
    gameType: GameType,
    location: string,
    tournamentPlace?: string | null,
    cashIn?: number | null,
    cashOut?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGameRecordMutationVariables = {
  input: DeleteGameRecordInput,
  condition?: ModelGameRecordConditionInput | null,
};

export type DeleteGameRecordMutation = {
  deleteGameRecord?:  {
    __typename: "GameRecord",
    gameDate: string,
    gameType: GameType,
    location: string,
    tournamentPlace?: string | null,
    cashIn?: number | null,
    cashOut?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetGameRecordQueryVariables = {
  id: string,
};

export type GetGameRecordQuery = {
  getGameRecord?:  {
    __typename: "GameRecord",
    gameDate: string,
    gameType: GameType,
    location: string,
    tournamentPlace?: string | null,
    cashIn?: number | null,
    cashOut?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGameRecordsQueryVariables = {
  filter?: ModelGameRecordFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGameRecordsQuery = {
  listGameRecords?:  {
    __typename: "ModelGameRecordConnection",
    items:  Array< {
      __typename: "GameRecord",
      gameDate: string,
      gameType: GameType,
      location: string,
      tournamentPlace?: string | null,
      cashIn?: number | null,
      cashOut?: number | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateGameRecordSubscriptionVariables = {
  filter?: ModelSubscriptionGameRecordFilterInput | null,
};

export type OnCreateGameRecordSubscription = {
  onCreateGameRecord?:  {
    __typename: "GameRecord",
    gameDate: string,
    gameType: GameType,
    location: string,
    tournamentPlace?: string | null,
    cashIn?: number | null,
    cashOut?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGameRecordSubscriptionVariables = {
  filter?: ModelSubscriptionGameRecordFilterInput | null,
};

export type OnUpdateGameRecordSubscription = {
  onUpdateGameRecord?:  {
    __typename: "GameRecord",
    gameDate: string,
    gameType: GameType,
    location: string,
    tournamentPlace?: string | null,
    cashIn?: number | null,
    cashOut?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGameRecordSubscriptionVariables = {
  filter?: ModelSubscriptionGameRecordFilterInput | null,
};

export type OnDeleteGameRecordSubscription = {
  onDeleteGameRecord?:  {
    __typename: "GameRecord",
    gameDate: string,
    gameType: GameType,
    location: string,
    tournamentPlace?: string | null,
    cashIn?: number | null,
    cashOut?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
