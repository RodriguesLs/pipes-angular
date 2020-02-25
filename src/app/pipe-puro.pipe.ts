import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipePuro'
})
export class PipePuroPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    
    if (value.length === null || args === undefined) {
      return value;
    }

    let filter = args;
    
    return value.filter(
      v => v.indexOf(filter) != -1
    );
    
  }

}
