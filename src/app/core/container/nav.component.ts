import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <div class="div-container wrapper">
      <div class="nav-float-left">
        <a class="logo">Logo</a>
        <a>Search</a>
        <a>Access Manager</a>
        <a>Support</a>
        <a>Billing</a>
      </div>
      <div class="nav-float-right">
      <a>Drop Down</a>
      <a>All Clusters</a>
      <a>See Product Tour</a>
      </div>
    </div>
  `,
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
