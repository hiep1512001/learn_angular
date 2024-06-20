import { Component, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit, AfterViewChecked {

  public soThuNhat:number=0
  public soThuHai:number=0;
  public tong:number|undefined
  public isShowing:boolean=false;
  public ngContent:string='Xin chào các bạn!'
  title = 'LifecycleHook';
  public product:any[]=[
    {
      id:1,
      name:'Iphone 1'
    },
    {
      id:2,
      name:'Iphone 2'
    },
    {
      id:3,
      name:'Iphone 3'
    },
    {
      id:4,
      name:'Iphone 4'
    },
    {
      id:5,
      name:'Iphone 5'
    }
  ]
  onToggle():void{
    this.isShowing=!this.isShowing;
  }
  onTinh():void{
    this.tong=this.soThuNhat+this.soThuHai
  }
  onClick(value:any):void{
    this.ngContent=value
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }
  onAddProduct(value:any):void{
    this.product.push({
      id:6,
      name:value
    })
  }
}
