import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  MatCardModule,
  MatButtonModule,
  MatTreeModule,
  MatMenuModule
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { MainComponent } from './core/main/main.component';
import { HomeComponent } from './features/home/home.component';
import { FooterComponent } from './core/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatTreeModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
