import { Login } from '../login/login';
import { AuthData } from '../../providers/auth-data';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public nav: NavController, private authData: AuthData) {

  }
  logOut() {
    this.authData.logoutUser().then(() => {
      this.nav.setRoot(Login);
    });
  }
}
