import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppIndicatorComponent } from './app-indicator.component';

describe('AppIndicatorComponent', () => {
  let component: AppIndicatorComponent;
  let fixture: ComponentFixture<AppIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
