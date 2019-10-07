import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as TerminalActions from '../app-reducers/terminal.actions';
import { terminalCommands } from '../app-reducers/terminal.actions';
import { TerminalDataInterface } from '../app-reducers/terminal.reducer';
import { AppStore } from '../app-reducers';


@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {
  @ViewChild('input1') inputEl: ElementRef;

  terminal: Observable<Array<TerminalDataInterface>>;
  terminalData: TerminalDataInterface[];
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
      const command = input.toLowerCase();
      if (command === 'clear') {
        this.store.dispatch({
          type: TerminalActions.CLEAR_TERMINAL});
      }else{
        this.store.dispatch({
          type: TerminalActions.COMMAND,
          command: _.includes(terminalCommands, command) ? command : 'notFound',
          input
        });
      }

      this.inputEl.nativeElement.focus();
    }
  }


  ngOnInit() {
  }

}
