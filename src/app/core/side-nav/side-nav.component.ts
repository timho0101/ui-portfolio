import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  template: `
    <div class="container">
      <ul class="wrapper">
        <li>
          <h4 class="ui-title">Projects</h4>
          <ul role="menu" class="wrapper">
            <li role="none"><a class="li-leafygreen" [routerLink]="['/natour']"><div class="leafygreen-ui-1aen1ds">Natour</div></a></li>
            <li role="none"><a class="li-leafygreen"><div class="leafygreen-ui-1aen1ds">App 2</div></a></li>
            <li role="none"><a class="li-leafygreen"><div class="leafygreen-ui-1aen1ds">App 3</div></a></li>
            <li role="none"><a class="li-leafygreen"><div class="leafygreen-ui-1aen1ds">App 4</div></a></li>
            <li role="none"><a class="li-leafygreen"><div class="leafygreen-ui-1aen1ds">App 5</div></a></li>
          </ul>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./side-nav.component.scss']
})

export class SideNavComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}