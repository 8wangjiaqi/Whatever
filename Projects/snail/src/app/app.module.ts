import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import {HttpModule} from '@angular/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { JizhangbenPage } from '../pages/jizhangben/jizhangben';
import { MingxiPage } from '../pages/mingxi/mingxi';
import { AddplanPage } from '../pages/addplan/addplan';
import { TriplanPage } from '../pages/triplan/triplan';
import { ZongjiPage } from '../pages/zongji/zongji';
import { NullpagePage} from '../pages/nullpage/nullpage';
// import { LocalStorageProvider } from '../providers/local-storage/local-storage';

//qiqi

import { GongluePage } from '../pages/gonglue/gonglue';
import { PinglunPage } from '../pages/pinglun/pinglun';
import { ShouyeqqPage } from '../pages/shouyeqq/shouyeqq';
import { CollectionPage } from '../pages/collection/collection';
import { StrategyPage } from '../pages/strategy/strategy';
import { AttentionPage } from '../pages/attention/attention';
import { RegisterPage } from '../pages/register/register';
import { EnrollPage } from '../pages/enroll/enroll';
import { ConcerningPage } from '../pages/concerning/concerning';
import { MessagePage } from '../pages/message/message';
import { OpinionPage } from '../pages/opinion/opinion';
import { FansPage } from '../pages/fans/fans';
import { AddpagePage } from '../pages/addpage/addpage';
import { HttpClientModule } from '@angular/common/http';
import { MyselfPage } from '../pages/myself/myself';
import { SubHeaderPage } from '../pages/sub-header/sub-header';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    JizhangbenPage,
    MingxiPage,
    AddplanPage,
    NullpagePage,
    TriplanPage,
    ZongjiPage,
    ShouyeqqPage,
    GongluePage,
    PinglunPage,
    RegisterPage,
    EnrollPage,
    MessagePage,
    ConcerningPage,
    OpinionPage,
    FansPage,
    AttentionPage,
    StrategyPage,
    CollectionPage,
    AddpagePage,
    MyselfPage,
    SubHeaderPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: '',
      tabsHideOnSubPages:true,
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    JizhangbenPage,
    MingxiPage,
    NullpagePage,
    AddplanPage,
    TriplanPage,
    ZongjiPage,
    ShouyeqqPage,
    GongluePage,
    PinglunPage,
    RegisterPage,
    EnrollPage,
    MessagePage,
    ConcerningPage,
    OpinionPage,
    FansPage,
    AttentionPage,
    StrategyPage,
    CollectionPage,
    AddpagePage,
    MyselfPage,
    SubHeaderPage
  ],
  providers: [

    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    // LocalStorageProvider
  ]
})
export class AppModule {}
