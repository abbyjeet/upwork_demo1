import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Login } from './login';

@NgModule({
  declarations: [
    Login,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    Login
  ]
})
export class LoginModule {}
