import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  template: `
    <div class="css-v0mdt">
      <ul class="leafygreen-ui-bdnco">
        <li>
          <h4 class="leafygreen" >Projects</h4>
          <ul role="menu" class="leafygreen-ui-bdnco">
            <li role="none"><a class="leafygreen-ui-1383ole" [routerLink]="['/natour']"><div class="leafygreen-ui-1aen1ds">Natour</div></a></li>
            <li role="none"><a class="leafygreen-ui-1383ole"><div class="leafygreen-ui-1aen1ds">App 2</div></a></li>
            <li role="none"><a class="leafygreen-ui-1383ole"><div class="leafygreen-ui-1aen1ds">App 3</div></a></li>
            <li role="none"><a class="leafygreen-ui-1383ole"><div class="leafygreen-ui-1aen1ds">App 4</div></a></li>
            <li role="none"><a class="leafygreen-ui-1383ole"><div class="leafygreen-ui-1aen1ds">App 5</div></a></li>
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