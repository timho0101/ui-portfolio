import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { ElementsModule } from './elements/elements.module';
import { SharedModule } from './shared/shared.module';
import { CssGridLayoutZeroComponent } from './elements/css-grid-layout/css-grid-layout-zero/css-grid-layout-zero.component';
import { CssGridLayoutOneComponent } from './elements/css-grid-layout/css-grid-layout-one/css-grid-layout-one.component';

@NgModule({
  declarations: [
    AppComponent,
    CssGridLayoutZeroComponent,
    CssGridLayoutOneComponent
  ],
  imports: [
    CoreModule,
    ElementsModule,
    SharedModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
