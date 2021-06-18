import { IAction } from "@src/common/actions/IAction";
import { SET_PLAYER_NAME } from "@src/modules/home/action";
import { PlayerDetailsState } from "@src/modules/home/reducers/state";

const initial: PlayerDetailsState = {
  player1_name: "",
  player2_name: ""
};

export const setPlayerNameReducer = (state: PlayerDetailsState = initial, action: IAction<any>): any => {
  switch (action.type) {
    case SET_PLAYER_NAME: {
      return {
        ...state,
        ...action.payload
      };
    }

    default:
      return state;
  }
};