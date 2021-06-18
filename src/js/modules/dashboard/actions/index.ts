import { _toRequestType, FULFILLED } from "@src/common/actions/ActionUtils";

export const SET_PLAYER_SCORE = "set-player-score";
export const SET_RESULT = "set-result";
export const SAVE_GAME = _toRequestType("save-game");
export const SAVE_GAME_SUCCESS = FULFILLED(SAVE_GAME);

export const setPlayerScore = payload => ({
  type: SET_PLAYER_SCORE,
  payload
});

export const setResult = payload => ({
  type: SET_RESULT,
  payload
});

export const saveGame = payload => ({
  type: SAVE_GAME,
  payload
});
