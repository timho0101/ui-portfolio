import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { BlogsComponent } from './blogs.component';
import { AboutModule } from '../about/about.module';

const routes: Routes = [
  {path: '', component: BlogsComponent, children: [
    {path: '/bookOfFlame', loadChildren: () => AboutModule}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [BlogsComponent],
  providers: []
})
export class BlogsModule {}
