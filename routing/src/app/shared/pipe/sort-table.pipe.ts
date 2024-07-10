import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash'
@Pipe({
  name: 'sortTable'
})
export class SortTablePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    var sortBy = args[0];
    var sortValue:number = args[1];
    if(sortBy=='name'){
    //  var result= value.sort((a: { name: number; },b: { name: number; })=>{
    //     if(a.name>b.name) return sortValue;
    //     else if(a.name<b.name) return -sortValue;
    //     else return 0;
    //   });
      value = _.orderBy(value,['name'],[sortValue == 1 ?'asc':'desc'])
      console.log(value);
    }
    if(sortBy=="price"){
      // var result= value.sort((a: { price: number; },b: { price: number; })=>{
      //   if(a.price>b.price) return sortValue;
      //   else if(a.price<b.price) return -sortValue;
      //   else return 0;
      // });
      value = _.orderBy(value,['price'],[sortValue == 1 ?'asc':'desc'])
    } 
    return value;
  }
}
