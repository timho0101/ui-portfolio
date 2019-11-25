import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fish-baikal-oilfish',
  template: `
    <p> {{paragraph}} <p>
  `
})
// tslint:disable-next-line: component-class-suffix
export class BaiKalOilfishComponent implements OnInit {
  public paragraph: string;

  constructor() { }

  ngOnInit() {
    this.paragraph = `
    Comephorus, known as the golomyankas or Baikal oilfish, are a genus comprising two species of peculiar,
    sculpin fishes endemic to Lake Baikal in Russia. Comephorus is the only genus in the family Comephoridae.
    Golomyankas are pelagic fishes which make the main food source of the Baikal seal.
    `;
  }

}
