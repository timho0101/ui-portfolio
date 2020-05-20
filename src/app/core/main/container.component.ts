import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styles: [`
  .verticalLine {
    border-right: 1px dashed lightslategrey;
  }
  
  html,
  body {
   height: 100%;
   position: relative;
  }
  .container {
   min-height: 100vh; /* will cover the 100% of viewport */
   overflow: hidden;
   display: block;
   position: relative;
   padding-bottom: 100px; /* height of your footer */
  }
  .footer {
   position: absolute;
   bottom: 0;
   width: 100%;
  }
  
  .nav-bar {
    margin-top: 15px;
  }
  
  a {
    margin-right: 15px;
    text-decoration: none;
    font-size: 16px;
    color: lightslategrey;
    display: inline;
  }
  
  
  .float-right {
    float: right;
  }
  `]
})
export class ContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
