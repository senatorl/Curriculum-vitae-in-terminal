import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalSkillsComponent } from './terminal-skills.component';

describe('TerminalSkillsComponent', () => {
  let component: TerminalSkillsComponent;
  let fixture: ComponentFixture<TerminalSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminalSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
