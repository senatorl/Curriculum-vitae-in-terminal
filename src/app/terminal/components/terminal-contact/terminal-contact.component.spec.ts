import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalContactComponent } from './terminal-contact.component';

describe('TerminalContactComponent', () => {
  let component: TerminalContactComponent;
  let fixture: ComponentFixture<TerminalContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminalContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
