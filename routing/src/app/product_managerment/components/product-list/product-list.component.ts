import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../services/models/product..class';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit, OnDestroy {
  private _productSerview:ProductService;
  public _router:Router;
  public _activateRoute:ActivatedRoute;
  public products:Product[]=[];
  public name:string='';
  public price:string='';
  public queryParamSubscription:Subscription|undefined
  constructor( _productService:ProductService, _router:Router,_activateRoute:ActivatedRoute){
  this._productSerview=_productService;
  this._router=_router;
  this._activateRoute=_activateRoute;
  }
  ngOnDestroy(): void {
    if(this.queryParamSubscription){
      this.queryParamSubscription.unsubscribe();
    }
  }
  ngOnInit(): void {
  this.queryParamSubscription = this._activateRoute.queryParams.subscribe(data=>{
      let name = data['name'];
      let price =data['price'];
      this.products= this._productSerview.getAllProduct(name,price);
  });

    this.products=this._productSerview.getAllProduct();
  }
  onSearch():void{
    this._router.navigate(['/products'],{queryParams:{name:this.name, price:this.price}});
  }
}
