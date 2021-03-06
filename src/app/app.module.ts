import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

import {AppComponent} from './app.component';
import {BestelformulierComponent} from './bestelformulier/bestelformulier.component';
import {FormsModule} from "@angular/forms";
import {WinkelmandjeComponent} from './winkelmandje/winkelmandje.component';

@NgModule({
  declarations: [
    AppComponent,
    BestelformulierComponent,
    WinkelmandjeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
