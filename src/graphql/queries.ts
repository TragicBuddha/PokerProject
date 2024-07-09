/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getGameRecord = /* GraphQL */ `query GetGameRecord($id: ID!) {
  getGameRecord(id: $id) {
    gameDate
    gameType
    location
    tournamentPlace
    cashIn
    cashOut
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetGameRecordQueryVariables,
  APITypes.GetGameRecordQuery
>;
export const listGameRecords = /* GraphQL */ `query ListGameRecords(
  $filter: ModelGameRecordFilterInput
  $limit: Int
  $nextToken: String
) {
  listGameRecords(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      gameDate
      gameType
      location
      tournamentPlace
      cashIn
      cashOut
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListGameRecordsQueryVariables,
  APITypes.ListGameRecordsQuery
>;
