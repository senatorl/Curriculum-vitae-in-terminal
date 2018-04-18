import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-indicator',
  templateUrl: './app-indicator.component.html',
  styleUrls: ['./app-indicator.component.scss']
})
export class AppIndicatorComponent implements OnInit {
  @Input()
  command: string;

  constructor() { }

  ngOnInit() {
  }

}
