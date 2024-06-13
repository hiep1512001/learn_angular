import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-to-view',
  templateUrl: './component-to-view.component.html',
  styleUrl: './component-to-view.component.scss'
})
export class ComponentToViewComponent {
    
    public name:string='Nguyễn Hoàng Hiệp';
    public age:number=20;
    public isMarried:boolean=false;
    public imgLink:string ='https://cms.haivan.com/photos/tim-hieu-ve-benh-vien-115-thanh-pho-ho-chi-minh-2.png';
    public imgWidth: number =200;
    public tbWidth:number=200;
    public isColor:boolean=false;
    // public person : object = {
    //   name : 'Nguyễn Hoàng Hiệp',
    //   age : 22,
    //   isMarried: true
    // };
    showInfo(){
      return `name : ${this.name} `;
    }
    constructor(){}
}
