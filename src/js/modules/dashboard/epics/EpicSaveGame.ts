import { Epic } from "redux-observable";

import * as EpicUtils from "@src/common/epics/EpicUtils";
import { SAVE_GAME, SAVE_GAME_SUCCESS } from "@src/modules/dashboard/actions";
import PingPongService from "@src/modules/dashboard/services/PingPongService";
import { FETCH_SUCCESS } from "@src/common/actions";
import FetchErrorHandler from "@src/common/api/FetchErrorHandler";

const request: EpicUtils.Request<any, any, any> = {
  type: SAVE_GAME,
  getData: payload => PingPongService.saveGame(payload),
  processData: () => {
    return [
      {
        type: SAVE_GAME_SUCCESS
      },
      {
        type: FETCH_SUCCESS,
        payload: { message: "Game saved successfully." }
      }
    ];
  },
  processError: response => [...FetchErrorHandler(response, "Enable to save the game at the moment.")]
};

export const EpicSaveGame: Epic<any, any> = EpicUtils.Create(request);