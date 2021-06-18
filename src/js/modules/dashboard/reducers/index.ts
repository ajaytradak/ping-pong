import { IAction } from "@src/common/actions/IAction";
import { SET_PLAYER_SCORE, SET_RESULT } from "@src/modules/dashboard/actions";
import { PlayerScoresState, ResultState } from "@src/modules/dashboard/reducers/state";

const initial: PlayerScoresState = {
  player1_score: 0,
  player2_score: 0
};

export const setPlayerScoresReducer = (state: PlayerScoresState = initial, action: IAction<any>): any => {
  switch (action.type) {
    case SET_PLAYER_SCORE: {
      return {
        ...state,
        ...action.payload
      };
    }

    default:
      return state;
  }
};

const initialResultState: ResultState = {
  winner: "",
  margin: 0
};

export const setResultReducer = (state: ResultState = initialResultState, action: IAction<any>): any => {
  switch (action.type) {
    case SET_RESULT: {
      return {
        ...state,
        ...action.payload
      };
    }

    default:
      return state;
  }
};
