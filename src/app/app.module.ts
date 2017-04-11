import { HttpModule } from '@angular/http';
import { ProfileData } from '../providers/profile-data';
import { AuthData } from '../providers/auth-data';
import { Signup } from '../pages/signup/signup';
import { Profile } from '../pages/profile/profile';
import { Login } from '../pages/login/login';
import { ResetPassword } from '../pages/reset-password/reset-password';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '6c77ab6d'
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Login,
    Signup,
    Profile,
    ResetPassword,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Login,
    Signup,
    Profile,
    ResetPassword,
  ],
  providers: [
    StatusBar,
    SplashScreen,    
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthData,
    ProfileData
  ]
})
export class AppModule {}
