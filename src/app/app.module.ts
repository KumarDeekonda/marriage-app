import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxGalleryModule } from 'ngx-gallery';
import { CountdownTimerModule } from 'ngx-countdown-timer';
import { CountdownModule } from 'ng2-countdown-timer';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxGalleryModule, CountdownTimerModule.forRoot()],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
