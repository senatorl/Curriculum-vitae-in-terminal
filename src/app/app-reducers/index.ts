import TerminalReducer, { TerminalDataInterface } from './terminal.reducer';
import { ActionReducerMap } from "@ngrx/store";
import { InjectionToken } from "@angular/core";

export interface AppStore {
  terminal: Array<TerminalDataInterface>;
}

export const reducers: ActionReducerMap<AppStore> = {
  terminal: TerminalReducer,
};

export const reducerToken = new InjectionToken<ActionReducerMap<AppStore>>("Registered Reducers");

export function getReducers() {
  return reducers;
}
