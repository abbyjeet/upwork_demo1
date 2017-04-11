import { Login } from '../pages/login/login';
import { Component, NgZone } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;
  zone: NgZone;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    const config = {
      apiKey: "AIzaSyCmT4BBYffzpd23Any9r8ZAN1cCzze0wmo",
      authDomain: "upwork-demo1.firebaseapp.com",
      databaseURL: "https://upwork-demo1.firebaseio.com",
      projectId: "upwork-demo1",
      storageBucket: "upwork-demo1.appspot.com",
      messagingSenderId: "71990610154"
    };
    firebase.initializeApp(config);

    this.zone = new NgZone({});

    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      this.zone.run(() => {
        if (!user) {
          this.rootPage = Login;
          unsubscribe();
        } else {
          this.rootPage = HomePage;
          unsubscribe();
        }
      });
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();





    });
  }


}

