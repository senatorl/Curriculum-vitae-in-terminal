import TerminalReducer from "./terminal.reducer";
import { ActionReducerMap } from "@ngrx/store";
import { AppStore } from "../terminal/terminal.component";
import { InjectionToken } from "@angular/core";

export const reducers: ActionReducerMap<AppStore> = {
  terminal: TerminalReducer,
};

export const reducerToken = new InjectionToken<ActionReducerMap<AppStore>>("Registered Reducers");

export function getReducers() {
  return reducers;
}
