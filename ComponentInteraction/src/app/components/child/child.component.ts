import { Component,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  public fullname:string|undefined;
  public phone:number|undefined
  @Output('fullname') onHandleFullName = new EventEmitter<string>();
  @Output('phone') onHandlePhone = new EventEmitter<number>();
  @Input('married') isMarried:boolean=false;
  @Input('age') age:number | undefined;
  // @Input ('name') name:string |undefined;
  private _name:string ='';
  @Input() set name(name : string){
    this._name=name;
  }
  get name(){
    return this._name;
  }
  onClick(){
    this.onHandleFullName.emit(this.fullname);
    this.onHandlePhone.emit(this.phone);
  }
}