import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Formatdata'
})
export class FormatdataPipe implements PipeTransform {

  transform(value: any, ...args: any[]): unknown {
    return value.substr(0,args[1])+"......" + value.substr(value.length-15,value.length);
  }

}
