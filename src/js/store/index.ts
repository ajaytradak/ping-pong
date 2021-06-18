import { createEpicMiddleware } from "redux-observable";
import { createLogger } from "redux-logger";
import { applyMiddleware, compose, createStore, Store } from "redux";
import { EpicRoot } from "@src/epics";
import { State } from "@src/reducers/state";
import { combinedReducers } from "@src/reducers";
import { EnvironmentConstants } from "@src/constants/EnvironmentConstants";
import { IAction } from "@src/common/actions/IAction";

const inDevelopment = process.env.NODE_ENV === EnvironmentConstants.development;

export const epicMiddleware = createEpicMiddleware();

/* tslint:disable */
// @ts-ignore
const composeEnhancers = inDevelopment && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  // @ts-ignore
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 50 })
  : compose;
/* tslint:enable */

const CreateStore = (): Store<State, IAction<any>> => {
  const logger = createLogger({
    collapsed: true
  });

  let store;

  /**
   * Split middlewares which we using in development and in production.
   */
  if (process.env.NODE_ENV === EnvironmentConstants.development) {
    store = createStore(combinedReducers, composeEnhancers(applyMiddleware(epicMiddleware, logger)));
  } else {
    store = createStore(combinedReducers, composeEnhancers(applyMiddleware(epicMiddleware)));
  }

  epicMiddleware.run(EpicRoot);

  return store;
};

export default CreateStore();
