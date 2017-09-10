import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { NotificationPage } from '../pages/notification/notification';
import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { VerNotificationPage } from '../pages/notification/verNotification';
import { Fav } from '../components/fav/fav';

import { UserService } from '../services/mocks/user.service';

//import { Http, Headers,Response, RequestOptions, HttpModule } from '@angular/http';
import { HttpModule } from '@angular/http';

//refactor por router

var links = [
  { component: LoginPage, name:'Login'},
  { component: TabsPage, name:'tabs', segment:'tabs'}
];


@NgModule({
  declarations: [
    MyApp,
    NotificationPage,
    ProfilePage,
    HomePage,
    TabsPage,
    LoginPage,
    VerNotificationPage,
    Fav,
  ],
  imports: [
    BrowserModule,HttpModule,
    IonicModule.forRoot(MyApp, links)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NotificationPage,
    ProfilePage,
    HomePage,
    TabsPage,
    LoginPage,
    VerNotificationPage,
    Fav
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService,

  ]
})
export class AppModule {}
