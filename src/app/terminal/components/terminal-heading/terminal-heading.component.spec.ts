import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalHeadingComponent } from './terminal-heading.component';

describe('TerminalHeadingComponent', () => {
  let component: TerminalHeadingComponent;
  let fixture: ComponentFixture<TerminalHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminalHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
