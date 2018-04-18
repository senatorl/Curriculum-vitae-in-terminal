import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalExperienceComponent } from './terminal-experience.component';

describe('TerminalExperienceComponent', () => {
  let component: TerminalExperienceComponent;
  let fixture: ComponentFixture<TerminalExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminalExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
