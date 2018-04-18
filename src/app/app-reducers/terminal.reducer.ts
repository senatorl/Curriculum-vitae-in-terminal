import * as TerminalActions from "./terminal.actions";

type Action = TerminalActions.All;

export default function TerminalReducer(state: Array<any> = [], action?: Action) {
  switch (action.type) {
    case TerminalActions.HELP:
      state.push({
        kind: "help",
        command: action.input
      });
      return state;

    case TerminalActions.CLEAR:
      state = [];
      return state;

    case TerminalActions.EXPERIENCE:
      state.push({
        kind: "experience",
        command: action.input
      });
      return state;

    case TerminalActions.FREELANCE:
      state.push({
        kind: "freelance",
        command: action.input
      });
      return state;

    case TerminalActions.CONTACT:
      state.push({
        kind: "contact",
        command: action.input
      });
      return state;

    case TerminalActions.ABOUT:
      state.push({
        kind: "about",
        command: action.input
      });
      return state;

    case TerminalActions.SKILLS:
      state.push({
        kind: "skills",
        command: action.input
      });
      return state;

    case TerminalActions.NOTFOUND:
      state.push({
        kind: "notFound",
        command: action.input
      });
      return state;

    default:

      return state;
  }
}

