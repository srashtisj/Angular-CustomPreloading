import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportingComponent } from './reporting.component';
import { Routes, RouterModule } from '@angular/router';
import { AReportComponent } from './a-report/a-report.component';
import { CReportComponent } from './c-report/c-report.component';
import { BReportComponent } from './b-report/b-report.component';


const routes: Routes = [
  {
    path: '',
    component: ReportingComponent
  },
  {
    path: 'areport',
    component: AReportComponent
  },
  {
    path: 'breport',
    component: BReportComponent
  },
  {
    path: 'creport',
    component: CReportComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReportingComponent, AReportComponent, BReportComponent, CReportComponent],
  exports: [RouterModule]
})
export class ReportingModule { }
