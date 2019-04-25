import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackpagePage } from './feedbackpage.page';

describe('FeedbackpagePage', () => {
  let component: FeedbackpagePage;
  let fixture: ComponentFixture<FeedbackpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackpagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
