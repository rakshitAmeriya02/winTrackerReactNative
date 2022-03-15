import * as ActionTypes from '../actions/actionTypes';
export function updatePlayerOneWins(payload) {
  return {
    type: ActionTypes.UPDATE_PLAYER_ONE_WINS,
    payload
  };
}

export function updatePlayerTwoWins(payload) {
  return {
    type: ActionTypes.UPDATE_PLAYER_TWO_WINS,
    payload
  };
}

export function updatePlayerOneName(payload) {
  return {
    type: ActionTypes.UPDATE_PLAYER_ONE_NAME,
    payload
  };
}

export function updatePlayerTwoName(payload) {
  return {
    type: ActionTypes.UPDATE_PLAYER_TWO_NAME,
    payload
  };
}