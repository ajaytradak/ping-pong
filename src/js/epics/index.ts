import { combineEpics } from "redux-observable";
import { EpicSaveGame } from "@src/modules/dashboard/epics/EpicSaveGame";

const importSet = new Set([EpicSaveGame]);

const importArray = [];

importSet.forEach(entry => importArray.push(entry));

export const EpicRoot = combineEpics(...importArray);
