import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassResetPopverComponent } from '../pass-reset-popver/pass-reset-popver.component';

describe('PassResetPopverPage', () => {
  let component: PassResetPopverComponent;
  let fixture: ComponentFixture<PassResetPopverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassResetPopverComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassResetPopverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
