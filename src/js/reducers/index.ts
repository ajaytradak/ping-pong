import { combineReducers } from "redux";
import { setPlayerNameReducer } from "@src/modules/home/reducers";
import { setPlayerScoresReducer, setResultReducer } from "@src/modules/dashboard/reducers";
import { fetchReducer } from "@src/common/reducers/fetchReducer";

export const combinedReducers = combineReducers({
  playerDetails: setPlayerNameReducer,
  playerScores: setPlayerScoresReducer,
  result: setResultReducer,
  fetch: fetchReducer
});
