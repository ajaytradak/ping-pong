import { Action } from "redux";

export interface IAction<P = any> extends Action {
  type: string;
  payload?: P;
  meta?: any;
}
