import { ActionsObservable, Epic, StateObservable, ofType } from "redux-observable";
import { Observable, concat, from } from "rxjs";
import { mergeMap, flatMap, catchError } from "rxjs/operators";
import { EnvironmentConstants } from "@src/constants/EnvironmentConstants";
import { State } from "@src/reducers/state";
import { IAction } from "@src/common/actions/IAction";
import { REJECTED } from "@src/common/actions/ActionUtils";
import { FETCH_FINISH, FETCH_START } from "@src/common/actions";
import FetchErrorHandler from "@src/common/api/FetchErrorHandler";

export interface Request<V = any, S = State, P = any> {
  type: string;
  hideLoadIndicator?: boolean;
  getData: (payload: P, state: S) => Promise<V>;
  retrieveData?: (payload: any, state: S) => Promise<V>;
  processData: (value: V, state: S, payload?: P) => IAction<any>[] | Observable<any>;
  processError?: (data: any, payload?: P) => IAction<any>[] | Observable<any>;
}

export interface DelayedRequest<V, S, P> extends Request<V, S, P> {
  delay: number;
}

const processError = (data: any, type: string, processError: any, payload: any): IAction<any>[] => {
  return [
    ...(process.env.NODE_ENV === EnvironmentConstants.development
      ? [
          {
            type: REJECTED(type),
            payload
          }
        ]
      : []),
    ...(processError ? processError(data, payload) : FetchErrorHandler(data))
  ];
};

export const Create = <V, S, P>(request: Request<V, S, P>): Epic<any, any, any, any> => {
  return (action$: ActionsObservable<any>, state$: StateObservable<S>): Observable<any> => {
    return action$.pipe(
      ofType(request.type),
      mergeMap(action =>
        concat(
          [
            {
              type: FETCH_START,
              payload: {
                hideIndicator: request.hideLoadIndicator
              }
            }
          ],
          from(request.getData(action.payload, state$.value)).pipe(
            flatMap(data => (request.retrieveData ? request.retrieveData(action.payload, state$.value) : [data])),
            flatMap(data => request.processData(data, state$.value, action.payload)),
            catchError(data => processError(data, request.type, request.processError, action.payload))
          ),
          [
            {
              type: FETCH_FINISH
            }
          ]
        )
      )
    );
  };
};
