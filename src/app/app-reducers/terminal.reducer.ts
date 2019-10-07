import * as TerminalActions from "./terminal.actions";

type Action = TerminalActions.All;

export interface TerminalDataInterface {
  kind: string;
  input: string;
}
export default function TerminalReducer(state: Array<any> = [], action?: Action) {
  switch (action.type) {
    case TerminalActions.COMMAND:
      state.push({
        kind: action.command,
        command: action.input
      });
      return state

    case TerminalActions.CLEAR_TERMINAL:
      state = [];
      return state;

    default:

      return state;
  }
}

