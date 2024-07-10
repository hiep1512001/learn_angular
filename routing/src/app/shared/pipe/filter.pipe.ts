import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
   
    var idFilter:string =args[0];
    var nameFilter:string =args[1];
    var statusFilter:string =args[2];
    if(!idFilter && !nameFilter && ! statusFilter){
      return value;
    }
    else{
      if(idFilter){
        value = value.filter((x: { id: string,name:string, status:string; })=>{
          return x.id.toString()==idFilter.toString()
        });
      }
       if(nameFilter){
        value = value.filter((x: { id: string,name:string, status:string; })=>{
          return x.name.toString().toLowerCase().indexOf(nameFilter.toLowerCase()) !=-1;
        });
      }
      if(statusFilter){
        value = value.filter((x: { id: string,name:string, status:string; })=>{
          return x.status.toString()==statusFilter.toString()
        });
      }
    }
    return value;
  }
}
