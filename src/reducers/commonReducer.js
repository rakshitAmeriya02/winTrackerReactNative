import * as ActionTypes from '../actions/actionTypes';

const initialState = {
  isLoading: null,
  firstPlayerName:'',
    secondPlayerName: '',
    playerOneWins: 0,
    playerTwoWins: 0,
};

function commonReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.UPDATE_PLAYER_ONE_WINS:
      return {
        ...state,
        playerOneWins: action.payload,
      };
    case ActionTypes.UPDATE_PLAYER_TWO_WINS:
      return {
        ...state,
        playerTwoWins: action.payload,
      };
      case ActionTypes.UPDATE_PLAYER_ONE_NAME:
        return {
          ...state,
          firstPlayerName: action.payload,
        };
      case ActionTypes.UPDATE_PLAYER_TWO_NAME:
        return {
          ...state,
          secondPlayerName: action.payload,
        };
      default:
        return {
          ...state,
        };
    }
  }
  
  export default commonReducer;