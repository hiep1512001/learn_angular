import { Component } from '@angular/core';

@Component({
  selector: 'app-structual',
  templateUrl: './structual.component.html',
  styleUrl: './structual.component.scss'
})
export class StructualComponent {
  public isShow:boolean=false;
  public username:string="Nguyễn Hoàng Hiệp"
  public isChecked:boolean= true;
  public Age :number=0;
  
  public names:string[]=['Long An','Vĩnh Long', 'Tp.Hồ Chí','Nghệ An'];
  public products: any[]=[
    
  ];
  public productFromServe: any=[
    {
      id:1,
      name:'Iphone 15',
      price:'12tr',
      image:'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus-series-image-16.png'
    },
    {
      id:2,
      name:'Iphone 11',
      price:'13tr',
      image:'https://cdn.hoanghamobile.com/i/preview/Uploads/2020/09/17/51kGDXeFZKL._SL1024_.jpg'
    },
    {
      id:3,
      name:'Oppo reno 2',
      price:'14tr',
      image:'https://cdn2.cellphones.com.vn/x/media/catalog/product/6/3/637037229706723788_oppo-reno-2-5_1_2.png'
    },
    {
      id:4,
      name:'Iphone 12',
      price:'16tr',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2uA_pU8j7v3QL7dFJ03XBAAQh1Cw-ECdsKg&s'
    },
    {
      id:5,
      name:'Iphone 13',
      price:'10tr',
      image:'https://cdn.xtmobile.vn/vnt_upload/product/10_2021/thumbs/600_iphone_13_mini_128gb_xanh.jpg'
    }
  ];
  public user:any=[
    {
      name:'Nguyễn Hoàng HiệpUSA1',
      country:'USA'
    },
    {
      name:'Nguyễn Hoàng HiệpVN1',
      country:'VN'
    },
    {
      name:'Nguyễn Hoàng HiệpUSA2',
      country:'USA'
    },
    {
      name:'Nguyễn Hoàng HiệpJP1',
      country:'JP'
    },
    {
      name:'Nguyễn Hoàng HiệpJP2',
      country:'JP'
    }
    ,
    {
      name:'Nguyễn Hoàng HiệpVN2',
      country:'VN'
    }
  ]
  onToggle(){
    // if(this.isShow){
    //   this.isShow=false;
    // }
    // else{
    //   this.isShow=true;
    // }
    this.isShow=!this.isShow;
  }
  onCheckChange(value:boolean){
    this.isChecked=value;
  }
  OnLoadData(){
    this.products=this.productFromServe
  }
  myTrackByFunction(index:any, item:any){
    return item.id;
  }
}
