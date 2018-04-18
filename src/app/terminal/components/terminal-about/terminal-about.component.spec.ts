import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalAboutComponent } from './terminal-about.component';

describe('TerminalAboutComponent', () => {
  let component: TerminalAboutComponent;
  let fixture: ComponentFixture<TerminalAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminalAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
