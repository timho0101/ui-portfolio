import { NgModule, Optional, SkipSelf } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NatourComponent } from './natour/natour.component';
import { EnsureModuleLoadedOnceGuard } from '../core/ensure-module-loaded-once.guard';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { TrilloComponent } from './trillo/trillo.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
    component: ContactComponent
  },
  {path: 'natour', component: NatourComponent},
  {path: 'trillo', component: TrilloComponent},
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
  declarations: [ 
    NatourComponent,
    HomeComponent,
    ContactComponent,
    TrilloComponent
  ],
  providers: []
})
export class ElementsModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: ElementsModule) {
    super(parentModule);
  }
}
