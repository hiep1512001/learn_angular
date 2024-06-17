import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title:string="ComponentInteraction"
  public isMarried:boolean=true;
  public age:number=18;
  public fullname:string|undefined;
  public phone:number|undefined;
  public users: any[]=[
    {
      id:1,
      name:'Nguyễn Hoàng Hiệp',
      phone:"142341424"
    },    
    {
      id:2,
      name:'Nguyễn Văn A',
      phone:'23523523534'
    }, 
    {
      id:3,
      name:'Nguyễn Văn B',
      phone:"34534543"
    }
  ];

  onGetFullName(value:any){
    this.fullname=value;
  }

  onGetPhone(value:any){
    this.phone=value;   
  }

}
