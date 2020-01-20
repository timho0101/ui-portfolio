import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { FooterModule } from '../footer/footer.module';
import { BodyModule } from '../body/body.module';
import { NavModule } from '../nav/nav.module';
import { LeftSideNavBarModule } from '../left-side-nav-bar/left-side-nav-bar.module';

@NgModule({
  imports: [
    RouterModule,
    NavModule,
    BodyModule,
    FooterModule,
    LeftSideNavBarModule
  ],
  declarations: [MainComponent],
  providers: []
})
export class MainModule { }
