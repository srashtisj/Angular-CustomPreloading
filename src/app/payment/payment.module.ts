import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import { XPaymentComponent } from './x-payment/x-payment.component';
import { YPaymentComponent } from './y-payment/y-payment.component';
import { ZPaymentComponent } from './z-payment/z-payment.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  // {
  //   path: '',
  //   component: XPaymentComponent
  // },
  // {
  //   path: 'xpayment',
  //   component: YPaymentComponent
  // }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PaymentComponent,
    XPaymentComponent,
    YPaymentComponent,
    ZPaymentComponent
  ],
  exports: [RouterModule]
})
export class PaymentModule { }
