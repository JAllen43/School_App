import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//Imports the android permission plugin
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
//Imports the geolocation plugin
import { Geolocation } from '@ionic-native/geolocation/ngx';
//Imports the location accuracy plugin
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
//Imports the call number plugin
import { CallNumber } from '@ionic-native/call-number/ngx';
//Imports the email composer plugin
import {EmailComposer} from '@ionic-native/email-composer/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  ],
  providers: [
    //Injects the plugins that have been imported
    InAppBrowser,
    EmailComposer,
    CallNumber,
    Clipboard,
    AndroidPermissions,
    Geolocation,
    LocationAccuracy,
    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {} 
