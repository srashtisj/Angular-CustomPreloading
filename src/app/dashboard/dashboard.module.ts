import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ADashboardComponent } from './a-dashboard/a-dashboard.component';
import { BDashboardComponent } from './b-dashboard/b-dashboard.component';
import { CDashboardComponent } from './c-dashboard/c-dashboard.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DashboardComponent, ADashboardComponent, BDashboardComponent, CDashboardComponent],
  exports: [DashboardComponent, ADashboardComponent, BDashboardComponent, CDashboardComponent]
})
export class DashboardModule { }
