/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createGameRecord = /* GraphQL */ `mutation CreateGameRecord(
  $input: CreateGameRecordInput!
  $condition: ModelGameRecordConditionInput
) {
  createGameRecord(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateGameRecordMutationVariables,
  APITypes.CreateGameRecordMutation
>;
export const updateGameRecord = /* GraphQL */ `mutation UpdateGameRecord(
  $input: UpdateGameRecordInput!
  $condition: ModelGameRecordConditionInput
) {
  updateGameRecord(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateGameRecordMutationVariables,
  APITypes.UpdateGameRecordMutation
>;
export const deleteGameRecord = /* GraphQL */ `mutation DeleteGameRecord(
  $input: DeleteGameRecordInput!
  $condition: ModelGameRecordConditionInput
) {
  deleteGameRecord(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteGameRecordMutationVariables,
  APITypes.DeleteGameRecordMutation
>;
