import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private mdIconRegistry: MatIconRegistry) {
    mdIconRegistry
      .addSvgIcon('github', '/assets/github.svg');
  }
  ngOnInit() {
  }

}
