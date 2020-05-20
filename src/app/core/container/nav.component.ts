import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <div class="leafygreen-ui-8sj84k">
      <a class="leafygreen-ui-1ay2x9v"><span class="leafygreen-ui-j752ew">Logo</span></a>
      <a class="leafygreen-ui-1ay2x9v"><span class="leafygreen-ui-j752ew">Search</span></a>
      <a class="leafygreen-ui-1ay2x9v"><span class="leafygreen-ui-j752ew">Access Manager DropDown</span></a>
      <a class="leafygreen-ui-1ay2x9v"><span class="leafygreen-ui-j752ew">support</span></a>
      <a class="leafygreen-ui-1ay2x9v"><span class="leafygreen-ui-j752ew">Billing</span></a>
      <a class="leafygreen-ui-1ay2x9v"><span class="leafygreen-ui-j752ew">See Product Tour</span></a>
      <a class="leafygreen-ui-1ay2x9v"><span class="leafygreen-ui-j752ew">All Clusters</span></a>
      <a class="leafygreen-ui-1ay2x9v"><span class="leafygreen-ui-j752ew">Drop Down</span></a>
    </div>
  `,
  styles: [`
  .leafygreen-ui-8sj84k {
      position: relative;
      z-index: 1;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      box-sizing: border-box;
      height: 60px;
      padding-left: 15px;
      padding-right: 15px;
      font-size: 13px;
      line-height: 15px;
      background-color: white;
      color: rgb(33, 49, 60);
      border-bottom: 1px solid rgb(231, 238, 236);
    }
    .leafygreen-ui-1ay2x9v {
      color: rgb(33, 49, 60);
      margin-right: 5px;
      margin-left: 5px;
      text-decoration: none;
      padding: 4px;
    }
    a, a:focus, a:hover {
      color: #006cbc;
    }
    .leafygreen-ui-j752ew {
      position: relative;
    }
  `]
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
