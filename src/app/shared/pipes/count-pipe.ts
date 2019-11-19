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
