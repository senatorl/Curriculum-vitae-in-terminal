import { Action } from "@ngrx/store";

export const HELP = "[Terminal] Help";
export const CLEAR = "[Terminal] Clear";
export const EXPERIENCE = "[Terminal] Experience";
export const FREELANCE = "[Terminal] Freelance";
export const SKILLS = "[Terminal] Skills";
export const ABOUT = "[Terminal] About";
export const CONTACT = "[Terminal] Contact";
export const NOTFOUND = "[Terminal] Not found";

export class Help implements Action {
  readonly type = HELP;

  constructor(public input: string) {
  }

}

export class Clear implements Action {
  readonly type = CLEAR;

}

export class Experience implements Action {
  readonly type = EXPERIENCE;

  constructor(public input: string) {
  }
}

export class Freelance implements Action {
  readonly type = FREELANCE;

  constructor(public input: string) {
  }

}

export class Skills implements Action {
  readonly type = SKILLS;

  constructor(public input: string) {
  }
}

export class About implements Action {
  readonly type = ABOUT;

  constructor(public input: string) {
  }
}

export class Contact implements Action {
  readonly type = CONTACT;

  constructor(public input: string) {
  }
}

export class Notfound implements Action {
  readonly type = NOTFOUND;

  constructor(public input: string) {
  }
}

export type All
  = Help
  | Clear
  | Experience
  | Freelance
  | Skills
  | About
  | Contact
  | Notfound;

