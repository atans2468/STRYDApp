import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { ListMasterPage } from '../pages/list-master/list-master';
import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { ItemReviewPage } from '../pages/item-review/item-review';
import { ModalContentPage } from '../pages/item-review/item-review';
import { HomePage } from '../pages/home/home';

import { Items } from '../mocks/providers/items';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ItemDetailPage,
    ListMasterPage,
    HomePage,
    LoginPage,
    ItemReviewPage,
    ModalContentPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ItemDetailPage,
    ListMasterPage,
    HomePage,
    LoginPage,
    ItemReviewPage,
    ModalContentPage
  ],
  providers: [
    Items,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
