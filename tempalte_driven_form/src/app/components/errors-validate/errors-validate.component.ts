import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-errors-validate',
  templateUrl: './errors-validate.component.html',
  styleUrl: './errors-validate.component.css'
})
export class ErrorsValidateComponent {
  @Input('control') control:any;
  constructor(){

  }
  getMessage(){
    let kq=null;
    for(let err in this.control.errors){
      if(this.control.dirty){
        kq =this.gettErrorsMessage(err, this.control.errors[err])
      }
    }
    return kq;
  }
  gettErrorsMessage(err: any, value: any){
    // let messages={
    //   'requried':'Requried',
    //   'minlength':'Minlength: ${value.requiredLength} character',
    //   'maxlength' :'Maxlength: ${value.requiredLength} character'
    // }
    // return messages[err];
    let kq=null;
    if(err=='required'){
      kq= 'required!'
    }
    if(err=='minlength'){
      kq= 'Minlength: '+ value.requiredLength +' character ' 
    }
    if(err=='maxlength'){
      kq= 'Maxlength: '+ value.requiredLength +'  character'
    }
    return kq;
  }
}
