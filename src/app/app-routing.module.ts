import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './core/main/main.component';
import { BookOfFlamesModule } from './elements/book-of-flames/book-of-flames.module';
import { BookOfWatersModule } from './elements/book-of-waters/book-of-waters.module';
import { AboutModule } from './elements/about/about.module';
import { ContactModule } from './elements/contact/contact.module';
import { LazyLoadingModule } from './elements/lazy-loading/lazy-loading.module';
import { RsCarouselControlModule } from './elements/rs-carousel-control/rs-carousel-control.module';
import { AngularPipesModule } from './elements/angular-pipes/angular-pipes.module';
import { ToDoListModule } from './elements/to-do-list/to-do-list.module';
import { NpmCommandModule } from './elements/npm-command/npm-command.module';
import { NotesModule } from './elements/notes/notes.module';
import { ApiServerModule } from './elements/api-server/api-server.module';
import { LocalSessionStorageModule } from './elements/local-session-storage/local-session-storage.module';
import { RsComModule } from './elements/rs-com-notes/rs-com-notes.module';
import { CssGridLayoutModule } from './elements/css-grid-layout/css-grid-layout.module';
import { UnitTestModule } from './elements/unit-test/unit-test.module';
import { CssGridLayoutZeroComponent } from './elements/css-grid-layout/css-grid-layout-zero/css-grid-layout-zero.component';

const routes: Routes = [
  {
    path: '', children: [
      {
        path: '', component: MainComponent, children: [
          {path: 'bookOfFlame', loadChildren: () => BookOfFlamesModule},
          {path: 'bookOfWater', loadChildren: () => BookOfWatersModule},
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
        ],
      },
      {
        path: 'cssGridExample0', component: CssGridLayoutZeroComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
