/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CReportComponent } from './c-report.component';

describe('CReportComponent', () => {
  let component: CReportComponent;
  let fixture: ComponentFixture<CReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
