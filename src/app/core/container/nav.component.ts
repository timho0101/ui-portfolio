import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <div class="div-container wrapper">
      <div class="nav-float-left">
        <a class="a-ui"><span class="span-ui">Logo</span></a>
        <a class="a-ui"><span class="span-ui">Search</span></a>
        <a class="a-ui"><span class="span-ui">Access Manager DropDown</span></a>
        <a class="a-ui"><span class="span-ui">Support</span></a>
        <a class="a-ui"><span class="span-ui">Billing</span></a>
      </div>
      <div class="nav-float-right">
        <a class="a-ui"><span class="span-ui">See Product Tour</span></a>
        <a class="a-ui"><span class="span-ui">All Clusters</span></a>
        <a class="a-ui"><span class="span-ui">Drop Down</span></a>
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
