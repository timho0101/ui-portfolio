import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

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

  ngOnInit() {

  }
}
