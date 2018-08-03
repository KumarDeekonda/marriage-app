import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxGalleryModule } from 'ngx-gallery';
// import {CountDown} from 'ng2-date-countdown';
import { CountdownTimerModule } from 'ngx-countdown-timer';
import {CountDown} from '../../node_modules/angular2-simple-countdown/countdown';

@NgModule({
  declarations: [
    AppComponent,
    CountDown
  ],
  imports: [
    BrowserModule,
    NgxGalleryModule,
    CountdownTimerModule.forRoot()
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
