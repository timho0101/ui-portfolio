import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { ElementsModule } from './elements/elements.module';
import { CssGridLayoutModule } from './elements/css-grid-layout/css-grid-layout.module';

const routes: Routes = [
  {path: '', loadChildren: () => CoreModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
