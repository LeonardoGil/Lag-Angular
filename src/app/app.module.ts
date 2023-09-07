import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component'

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeComponent
  ],
  providers: [],
})
export class AppModule { }
