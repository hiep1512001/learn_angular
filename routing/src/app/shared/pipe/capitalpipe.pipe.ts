import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalpipe'
})
export class CapitalpipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    value= value.split(' ');
    return value;
  }
}
