import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrMaskerModule } from 'br-mask';

// firebase
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

// plugins
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

// component
import { GeneralComponent } from './components/general/general.component';

// pages
import { AdddirectionPageModule } from './pages/adddirection/adddirection.module';
import { VerifypassPageModule } from './modals/verifypass/verifypass.module';
import { AlertPageModule } from './modals/alert/alert.module';
import { ErrorPageModule } from './modals/error/error.module';
import { ModalPageModule } from './modals/modal/modal.module';
import { ReceiptPageModule } from './pages/receipt/receipt.module';
import { DetalleproductosPageModule } from './pages/detalleproductos/detalleproductos.module';
import { DetallecuponesPageModule } from './pages/detallecupones/detallecupones.module';

// components
import { ModalcardPageModule } from './modals/modalcard/modalcard.module';
import { OrderPage } from './pages/order/order.page';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    HttpClientModule,
    BrMaskerModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    GeneralComponent,
    OrderPage,
    AppComponent,
    NativeGeocoder,
    LocationAccuracy,
    Facebook,
    FingerprintAIO,
    LocalNotifications,
  ],
  exports: [
    DetalleproductosPageModule,
    AdddirectionPageModule,
    VerifypassPageModule,
    AlertPageModule,
    ErrorPageModule,
    ModalPageModule,
    ReceiptPageModule,
    DetalleproductosPageModule,
    DetallecuponesPageModule,
    ModalcardPageModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
