import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalFreelanceComponent } from './terminal-freelance.component';

describe('TerminalFreelanceComponent', () => {
  let component: TerminalFreelanceComponent;
  let fixture: ComponentFixture<TerminalFreelanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminalFreelanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalFreelanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
