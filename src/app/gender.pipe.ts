import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (args[0] === 'male' || args[0] === 'MALE') {
      return 'Mr. ' + value;
    } else {
      return 'Ms. ' + value;
    }
  }

}
