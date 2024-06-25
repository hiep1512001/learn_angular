import { Injectable } from '@angular/core';
import { Product } from '../models/product..class';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  public products:Product[]=[
    {
      id:1,
      name:"I phone 1",
      price:100,
      status:true
    },
    {
      id:2,
      name:"I phone 2",
      price:200,
      status:false
    },
    {
      id:3,
      name:"I phone 3",
      price:300,
      status:false
    },
    {
      id:4,
      name:"I phone 4",
      price:400,
      status:false
    },
    {
      id:5,
      name:"I phone 5",
      price:500,
      status:true
    },
    {
      id:6,
      name:"I phone 6",
      price:600,
      status:true
    },
    {
      id:7,
      name:"I phone 7",
      price:700,
      status:false
    },
    {
      id:8,
      name:"Oppo reno 2",
      price:700,
      status:false
    },
    {
      id:9,
      name:"XIaomi mi11",
      price:700,
      status:false
    },
    {
      id:10,
      name:"Samsung a15",
      price:600,
      status:false
    }
  ]
  getAllProduct(name?:string, price?:number){
    var value=this.products;
    if(name){
      value=value.filter(x=>{
        return x.name?.toLowerCase().indexOf(name.toLowerCase()) !=-1;
      })
    }
    if(price){
      value=value.filter(x=>{
        return x.price==price;
      })
    }
    return value;
  }
  getProductById(id:number){
    var result=null;
    for(let i=0; i<this.products.length; i++){
      if(this.products[i].id==id){
        result=this.products[i];
        break;
      }
    }
    return result;
  }
  edit(product:Product){
    // var index=this.products.indexOf(product.)
    // alert(index);
  }
}
