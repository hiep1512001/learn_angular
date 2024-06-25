import { Product } from './../../models/product..class';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit, OnDestroy {
  public product:any;
  public subcription:Subscription|undefined
  public _productService:ProductService
  private _activateRoute:ActivatedRoute;
  constructor(_activateRoute:ActivatedRoute,_productService:ProductService ){
    this._activateRoute=_activateRoute;
    this._productService=_productService;
  }
  ngOnDestroy(): void {
    if(this.subcription){
      this.subcription.unsubscribe();
    }
  }
  ngOnInit(): void {
    this.subcription=this._activateRoute.params.subscribe(data=>{
      let id = data['id'];
      this.product=this._productService.getProductById(id);
    })
  }
  onEdit(){
    this._productService.edit(this.product)
  }
}
