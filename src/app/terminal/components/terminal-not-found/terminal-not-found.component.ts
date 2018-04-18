import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-terminal-not-found',
  templateUrl: './terminal-not-found.component.html',
  styleUrls: ['./terminal-not-found.component.scss']
})
export class TerminalNotFoundComponent implements OnInit {
  @Input()
  command: string;

  constructor() { }

  ngOnInit() {
  }

}
