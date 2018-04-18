import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalHelpComponent } from './terminal-help.component';

describe('TerminalHelpComponent', () => {
  let component: TerminalHelpComponent;
  let fixture: ComponentFixture<TerminalHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminalHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
