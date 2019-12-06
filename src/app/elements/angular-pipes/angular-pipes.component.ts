import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-pipes',
  templateUrl: './angular-pipes.component.html',
  styleUrls: ['./angular-pipes.component.scss']
})
export class AngularPipesComponent implements OnInit {

  public str = 'testing';

  public countPipe = `
    import { Pipe, PipeTransform } from '@angular/core';

    @Pipe({
      name: 'count'
    })
    export class CountPipe implements PipeTransform {
      transform(value: string): number {
        let counter = -1;
        for (let i = 0; i <= value.length; i++) {
          if (value.charAt(i) === ' ') {
            counter = counter;
          } else {
            counter++;
          }
        }

        return counter;
      }
    }
  `;

  public reverseStringPipe = `
    import { Pipe, PipeTransform } from '@angular/core';

    @Pipe({
      name: 'reverseString'
    })
    export class CustomPipeReverseStr implements PipeTransform {
      transform(value: string): string {
        let newStr = '';
        for (let i = value.length - 1; i >= 0; i--) {
          newStr += value.charAt(i);
        }

        return newStr;
      }
    }

  `;

  ngOnInit() {
  }

}
