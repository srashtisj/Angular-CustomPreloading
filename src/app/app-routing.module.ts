import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomPreloadingService } from './custom-preloading.service';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    pathMatch: 'full'
  },
  {
    path: 'user',
    data: { preload: true },
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'accounting',
    loadChildren: () => import('./accounting/accounting.module').then(m => m.AccountingModule)
  },
  {
    path: 'payment',
    data: { preload: true },
    loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule)
  },
  {
    path: 'reporting',
    loadChildren: () => import('./reporting/reporting.module').then(m => m.ReportingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadingService })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
