import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutModule } from '../elements/about/about.module';
import { ContactModule } from '../elements/contact/contact.module';
import { LazyLoadingModule } from '../elements/lazy-loading/lazy-loading.module';
import { RsCarouselControlModule } from '../elements/rs-carousel-control/rs-carousel-control.module';
import { AngularPipesModule } from '../elements/angular-pipes/angular-pipes.module';
import { ToDoListModule } from '../elements/to-do-list/to-do-list.module';
import { NpmCommandModule } from '../elements/npm-command/npm-command.module';
import { NotesModule } from '../elements/notes/notes.module';
import { ApiServerModule } from '../elements/api-server/api-server.module';
import { LocalSessionStorageModule } from '../elements/local-session-storage/local-session-storage.module';
import { RsComModule } from '../elements/rs-com-notes/rs-com-notes.module';
import { CssGridLayoutModule } from '../elements/css-grid-layout/css-grid-layout.module';
import { ElementsModule } from '../elements/elements.module';
import { MatSidenavModule, MatToolbarModule, MatMenuModule, MatIconModule, MatGridListModule, MatButtonModule } from '@angular/material';
import { NavComponent } from './nav/nav.component';
import { LeftSideNavBarComponent } from './left-side-nav-bar/left-side-nav-bar.component';
import { AngularComponent } from './left-side-nav-bar/angular/angular.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {path: 'about', loadChildren: () => AboutModule},
      {path: 'contact', loadChildren: () => ContactModule},
      {path: 'lazyLoading', loadChildren: () => LazyLoadingModule},
      {path: 'rsCarouselControl', loadChildren: () => RsCarouselControlModule},
      {path: 'pipes', loadChildren: () => AngularPipesModule},
      {path: 'todo', loadChildren: () => ToDoListModule},
      {path: 'npmCommand', loadChildren: () => NpmCommandModule},
      {path: 'notes', loadChildren: () => NotesModule},
      {path: 'apiServer', loadChildren: () => ApiServerModule},
      {path: 'localSessionStorage', loadChildren: () => LocalSessionStorageModule},
      {path: 'rsComNotes', loadChildren: () => RsComModule},
      {path: 'cssGridLayout', loadChildren: () => CssGridLayoutModule},
      {path: '', loadChildren: () => ElementsModule}
    ]
  },
  {path: '', loadChildren: () => CssGridLayoutModule}
];

@NgModule({
  imports: [
    RouterModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [
    MainComponent,
    NavComponent,
    LeftSideNavBarComponent,
    AngularComponent,
    FooterComponent,
    BodyComponent
  ],
  providers: []
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
