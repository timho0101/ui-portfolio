import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
import { RouterModule, Routes } from '@angular/router';
import { MainModule } from './main/main.module';
import { MainComponent } from './main/main.component';
import { BookOfFlamesModule } from '../elements/book-of-flames/book-of-flames.module';
import { BookOfWatersModule } from '../elements/book-of-waters/book-of-waters.module';
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
      {path: 'cssGridLayout', loadChildren: () => CssGridLayoutModule}
    ]
  },
  {path: '', loadChildren: () => CssGridLayoutModule},
  {path: '', loadChildren: () => ElementsModule}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MainModule
  ],
  exports: [RouterModule],
  declarations: [],
  providers: []
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
