
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product..class';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  public product:any;
  public subcription:Subscription|undefined
  constructor(private _routerService:Router,public _activateRoute:ActivatedRoute, private _productService:ProductService){
  }
  ngOnDestroy(): void {
    if(this.subcription){
      this.subcription.unsubscribe;
    }
  }
  ngOnInit(): void {
    // this.product=this._productService.getProductById(this._activateRoute.snapshot.params['id'])
    this.subcription=this._activateRoute.params.subscribe(data=>{
      let id = data['id'];
      this.product=this._productService.getProductById(id);
    })
  }
  onBackToList(){
    this._routerService.navigate(['products'])
    // this._routerService.navigate(['list'],{
    //   relativeTo:this._activateRoute.parent
    // })
  }
  onEdit(){
    // this._routerService.navigate(['edit',this.product.id],{
    //   relativeTo:this._activateRoute.parent
    // })
    this._routerService.navigate(['/product/edit',this.product.id])
  }
  onDelete(){
    
  }
}
