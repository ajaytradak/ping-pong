// global app state
import { PlayerDetailsState } from "@src/modules/home/reducers/state";
import { PlayerScoresState, ResultState } from "@src/modules/dashboard/reducers/state";
import { Fetch } from "@src/common/reducers/State";

export interface State {
  playerDetails: PlayerDetailsState;
  playerScores: PlayerScoresState;
  result: ResultState;
  fetch: Fetch;
}
