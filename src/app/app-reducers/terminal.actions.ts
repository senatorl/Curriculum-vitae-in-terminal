import { Action } from "@ngrx/store";

export const COMMAND = "[Terminal] New command";
export const CLEAR_TERMINAL = "[Terminal] Clear terminal";


export const terminalCommands = ['help', 'experience', 'freelance', 'contact', 'about', 'skills', 'notFound'] ;
export type TerminalCommandsType = typeof terminalCommands[number];


export class Command implements Action {
  readonly type = COMMAND;

  constructor(public command: TerminalCommandsType, public input: string) {
  }

}

export class ClearTerminal implements Action {
  readonly type = CLEAR_TERMINAL;

}





export type All
  = Command | ClearTerminal;

