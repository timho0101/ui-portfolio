import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  contents: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, contents: 'ng new customer-app --routing'},
  {position: 2, contents: 'Helium'},
  {position: 3, contents: 'Lithium'},
  {position: 4, contents: 'Beryllium'}
];
@Component({
  selector: 'app-lazy-loading',
  templateUrl: './lazy-loading.component.html',
  styleUrls: ['./lazy-loading.component.scss']
})
export class LazyLoadingComponent implements OnInit {
  displayedColumns: string[] = ['position', 'contents'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}
