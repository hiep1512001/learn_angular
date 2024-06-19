import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortNumber'
})
export class SortNumberPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    var result =  value.sort((a: number,b: number)=>{
      if(a>b) return args[0];
      else if(a<b) return -args[0];
      else return 0;
    });
    return [...result];
  }
}
