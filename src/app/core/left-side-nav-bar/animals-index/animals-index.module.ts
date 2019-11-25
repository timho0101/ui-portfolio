import { NgModule } from '@angular/core';
import { BaiKalOilfishComponent } from './components/baikal-oilfish.component';
import { AnimalsIndexComponent } from './animals-index.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [
//   {path: '/baikalOilFish', component: BaiKalOilfishComponent}
// ];

@NgModule({
  imports: [
    MatMenuModule,
    MatButtonModule
    // RouterModule.forChild(routes)
  ],
  exports: [
    BaiKalOilfishComponent,
    AnimalsIndexComponent
    // RouterModule
  ],
  declarations: [
    BaiKalOilfishComponent,
    AnimalsIndexComponent
  ],
  providers: []
})
export class AnimalsIndexModule {}
