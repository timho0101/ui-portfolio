import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GitBestPraticeComponent } from './git-best-pratice.component';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  {path: '', component: GitBestPraticeComponent}
];

@NgModule({
  imports: [
    MatCardModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [GitBestPraticeComponent],
  providers: []
})
export class GitBestPraticeModule { }
