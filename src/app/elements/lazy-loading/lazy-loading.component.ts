import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lazy-loading',
  templateUrl: './lazy-loading.component.html',
  styleUrls: ['./lazy-loading.component.scss']
})
export class LazyLoadingComponent implements OnInit {

  public codeModule = `
    import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';

    const routes: Routes = [
      {path: '', component: LazyLoadingComponent }
    ]

    @NgModule({
      import: [
        RouterModule.forChild(routes)
      ],
      export: [RouterModule],
      decleration: [LazyLoadingComponent],
      providors: []
    })
    export class LazyLoadingModule { }
  `;

  public codeRoute = `
    import { RouterModule, Routes } from '@angular/router';
    import { NgModule } from '@angular/router';

    const routes: Routes = [
      {path: 'somewhere', loadChildren: () => someModule}
    ];
    @NgModule({
      import: [RouterModule.forChild(routes)],
      export: [RouterModule]
    })
    export class CodeRoute {}
  `;

  ngOnInit() {

  }
}
