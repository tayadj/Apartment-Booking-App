import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApartmentsModule } from './apartments/apartments.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApartmentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
