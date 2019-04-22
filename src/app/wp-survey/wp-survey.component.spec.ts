import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WpSurveyComponent } from './wp-survey.component';

describe('WpSurveyComponent', () => {
  let component: WpSurveyComponent;
  let fixture: ComponentFixture<WpSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WpSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WpSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
