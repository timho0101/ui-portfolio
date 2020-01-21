import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterModule } from '../footer/footer.module';
import { BodyModule } from '../body/body.module';
import { NavModule } from '../nav/nav.module';
import { LeftSideNavBarModule } from '../left-side-nav-bar/left-side-nav-bar.module';
import { BookOfFlamesModule } from 'src/app/elements/book-of-flames/book-of-flames.module';
import { BookOfWatersModule } from 'src/app/elements/book-of-waters/book-of-waters.module';
import { AboutModule } from 'src/app/elements/about/about.module';
import { ContactModule } from 'src/app/elements/contact/contact.module';
import { LazyLoadingModule } from 'src/app/elements/lazy-loading/lazy-loading.module';
import { RsCarouselControlModule } from 'src/app/elements/rs-carousel-control/rs-carousel-control.module';
import { AngularPipesModule } from 'src/app/elements/angular-pipes/angular-pipes.module';
import { ToDoListModule } from 'src/app/elements/to-do-list/to-do-list.module';
import { NpmCommandModule } from 'src/app/elements/npm-command/npm-command.module';
import { NotesModule } from 'src/app/elements/notes/notes.module';
import { ApiServerModule } from 'src/app/elements/api-server/api-server.module';
import { LocalSessionStorageModule } from 'src/app/elements/local-session-storage/local-session-storage.module';
import { RsComModule } from 'src/app/elements/rs-com-notes/rs-com-notes.module';
import { CssGridLayoutModule } from 'src/app/elements/css-grid-layout/css-grid-layout.module';

// const routes: Routes = [
//   {
//     path: '', children: [
//       {path: '', component: MainComponent, children: [
//         {path: 'bookOfFlame', loadChildren: () => BookOfFlamesModule},
//         {path: 'bookOfWater', loadChildren: () => BookOfWatersModule},
//         {path: 'about', loadChildren: () => AboutModule},
//         {path: 'contact', loadChildren: () => ContactModule},
//         {path: 'lazyLoading', loadChildren: () => LazyLoadingModule},
//         {path: 'rsCarouselControl', loadChildren: () => RsCarouselControlModule},
//         {path: 'pipes', loadChildren: () => AngularPipesModule},
//         {path: 'todo', loadChildren: () => ToDoListModule},
//         {path: 'npmCommand', loadChildren: () => NpmCommandModule},
//         {path: 'notes', loadChildren: () => NotesModule},
//         {path: 'apiServer', loadChildren: () => ApiServerModule},
//         {path: 'localSessionStorage', loadChildren: () => LocalSessionStorageModule},
//         {path: 'rsComNotes', loadChildren: () => RsComModule},
//         {path: 'cssGridLayout', loadChildren: () => CssGridLayoutModule}
//       ]},
//       {path: '', loadChildren: () => CssGridLayoutModule}
//     ]
//   }
// ];

@NgModule({
  imports: [
    RouterModule,
    NavModule,
    BodyModule,
    FooterModule,
    LeftSideNavBarModule
  ],
  exports: [RouterModule],
  declarations: [MainComponent],
  providers: []
})
export class MainModule { }
