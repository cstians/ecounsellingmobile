import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackPagePage } from './feedback-page.page';

describe('FeedbackPagePage', () => {
  let component: FeedbackPagePage;
  let fixture: ComponentFixture<FeedbackPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
