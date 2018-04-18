import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import * as _ from "lodash";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import * as TerminalActions from "../app-reducers/terminal.actions";

export interface AppStore {
  terminal: Array<any>;
}

@Component({
  selector: "app-terminal",
  templateUrl: "./terminal.component.html",
  styleUrls: ["./terminal.component.scss"]
})
export class TerminalComponent implements OnInit {
  @ViewChild('input1') inputEl:ElementRef;

  terminal: Observable<Array<any>>;
  terminalData: any[];
  searchValue: string = null;

  constructor(private store: Store<AppStore>) {

    this.terminal = store.select('terminal');
    this.terminal.subscribe((data) => {
      this.terminalData = data;
    });
  }

  onSubmit(input) {
    this.searchValue = null;
    if (!_.isEmpty(input)) {
      const inputUppercase = input.toUpperCase();
      this.store.dispatch({
        type: _.has(TerminalActions, inputUppercase) ? TerminalActions[inputUppercase] : TerminalActions['NOTFOUND'],
        input});
      this.inputEl.nativeElement.focus();
      console.log(this.inputEl.nativeElement)
    }
  }


  ngOnInit() {
  }

}
