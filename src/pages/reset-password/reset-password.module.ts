import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ResetPassword } from './reset-password';

@NgModule({
  declarations: [
    ResetPassword,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    ResetPassword
  ]
})
export class ResetPasswordModule {}
