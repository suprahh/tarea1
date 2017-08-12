import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { Tab1Page, Tab2Page, Tab3Page, TabsPage , Pagina2Page} from "../pages/index.paginas";


@NgModule({
  declarations: [
    MyApp,
    TabsPage, Tab1Page, Tab2Page, Tab3Page, Pagina2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: 'Atras',
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
   TabsPage, Tab1Page, Tab2Page, Tab3Page ,Pagina2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
