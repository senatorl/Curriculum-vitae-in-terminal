import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalNotFoundComponent } from './terminal-not-found.component';

describe('TerminalNotFoundComponent', () => {
  let component: TerminalNotFoundComponent;
  let fixture: ComponentFixture<TerminalNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminalNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
