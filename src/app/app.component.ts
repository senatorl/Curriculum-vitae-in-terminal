import { Component, OnInit } from "@angular/core";
import * as Typed from "typed.js";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  ngOnInit() {
    const type = new Typed(".headline", {
      strings: ["Łukasz Senator"],
      typeSpeed: 200,
    });

  }
}
