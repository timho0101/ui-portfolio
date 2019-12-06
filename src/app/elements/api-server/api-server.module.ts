import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiServerComponent } from './api-server.component';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  {path: '', component: ApiServerComponent}
];

@NgModule({
  imports: [
    MatCardModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ApiServerComponent],
  providers: []
})
export class ApiServerModule { }
