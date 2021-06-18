import { FULFILLED, REJECTED } from "@src/common/actions/ActionUtils";

export const FETCH_START = "common/fetch/start";
export const FETCH_SUCCESS = FULFILLED("common/fetch");
export const FETCH_FAIL = REJECTED("common/fetch");

export const FETCH_CLEAR = "common/fetch/clearInfo";
export const FETCH_FINISH = "common/fetch/finish";

export const clearFetch = () => ({
  type: FETCH_CLEAR
});
