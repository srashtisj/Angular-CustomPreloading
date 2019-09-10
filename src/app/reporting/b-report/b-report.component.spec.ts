/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BReportComponent } from './b-report.component';

describe('BReportComponent', () => {
  let component: BReportComponent;
  let fixture: ComponentFixture<BReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
