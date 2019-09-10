/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AReportComponent } from './a-report.component';

describe('AReportComponent', () => {
  let component: AReportComponent;
  let fixture: ComponentFixture<AReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
