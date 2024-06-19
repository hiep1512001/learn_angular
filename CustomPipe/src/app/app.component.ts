import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CustomPipe';
  public idFilter:string|undefined;
  public nameFilter:string|undefined;
  public statusFilter:string|undefined
  public content:string='You can construct a format string using symbols to specify the components of a date-time value, as described in the following table. Format details depend on the locale. Fields marked with (*) are only available in the extra data set for the given locale.';
  public arrayNUmber:number[]=[1,4,2,6,3,9,7,6,5]
  private trangThaiTang:string="Tăng dần";
  private trangThaiGiam:string="Giảm dần";
  public sortFilter:number=1;
  public trangThai:string=this.trangThaiTang;
  public name:string=""
  public sortBy:string="name"//tên hoặc price
  public sortValue:number=1// 1 tăng, -1 giảm
  public products:any[]=[
    {
      id:1,
      name:'Iphone 10',
      status:true,
      price:'500'
    },
    {
      id:2,
      name:'Iphone 11',
      status:false,
      price:'400'
    },
    {
      id:3,
      name:'Iphone 12',
      status:true,
      price:'600'
    },
    {
      id:4,
      name:'Iphone 13',
      status:true,
      price:'700'
    },
    {
      id:5,
      name:'Iphone 14',
      status:false,
      price:'300'
    },
    {
      id:6,
      name:'Oppo reno 2',
      status:false,
      price:'200'
    },    {
      id:7,
      name:'Oppo reno 11',
      status:true,
      price:'800'
    }
  ];
  chuyenTrangThai():void{
    if(this.trangThai===this.trangThaiTang){
      this.trangThai=this.trangThaiGiam
      this.sortFilter = -1;
    }
    else{
      this.trangThai=this.trangThaiTang
      this.sortFilter = 1;
    }
  }
  onSort(value:string):void{
    this.sortBy=value;
    this.sortValue=-this.sortValue;
  }
}
