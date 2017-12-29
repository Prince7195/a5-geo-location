import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { AgmCoreModule } from '@agm/core';
import * as firebase from 'firebase/app';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { GeoService } from './geo.service';

export const firebaseConfig = environment.firebaseConfig;

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKey
    })
  ],
  providers: [GeoService, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
