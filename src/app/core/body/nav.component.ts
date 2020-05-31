import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <div class="div-container wrapper">
      <div class="nav-float-left">
      <a href="#">Home</a>
      <a>About</a>
      <a>Contact</a>
      <div></div>
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
