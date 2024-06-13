import { Component } from '@angular/core';

@Component({
  selector: 'app-view-to-component',
  templateUrl: './view-to-component.component.html',
  styleUrl: './view-to-component.component.scss'
})
export class ViewToComponentComponent {
    public title:string="Event Binding";
    public count:number=0;
    public userName:string='' ;
    onClickMe(event:any){
      console.log(event);
      alert(event.target.innerText);
    }
    // onInc(){
    //   this.count=this.count+1;
    // }
    onKeyUp(event:any){
      this.userName= event.target.value;
    }
}
