/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateGameRecord = /* GraphQL */ `subscription OnCreateGameRecord(
  $filter: ModelSubscriptionGameRecordFilterInput
) {
  onCreateGameRecord(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateGameRecordSubscriptionVariables,
  APITypes.OnCreateGameRecordSubscription
>;
export const onUpdateGameRecord = /* GraphQL */ `subscription OnUpdateGameRecord(
  $filter: ModelSubscriptionGameRecordFilterInput
) {
  onUpdateGameRecord(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateGameRecordSubscriptionVariables,
  APITypes.OnUpdateGameRecordSubscription
>;
export const onDeleteGameRecord = /* GraphQL */ `subscription OnDeleteGameRecord(
  $filter: ModelSubscriptionGameRecordFilterInput
) {
  onDeleteGameRecord(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteGameRecordSubscriptionVariables,
  APITypes.OnDeleteGameRecordSubscription
>;
