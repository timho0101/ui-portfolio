import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public email = `
    Email: github.timho@gmail.com
  `;

  public gitHub = `
    GitHub: github.com/Voslan
  `;

  ngOnInit() {
  }

}
