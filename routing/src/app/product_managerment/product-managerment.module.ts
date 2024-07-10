import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
//product component
import { ProductsComponent } from './components/products/products.component'; 
import { ProductDetailComponent } from './components/product-detail/product-detail.component'; 
import { ProductListComponent } from './components/product-list/product-list.component'; 
import { EditProductComponent } from './components/edit-product/edit-product.component'; 

//service
import { ProductService } from './services/product.service';
import { productRoutes} from './product-managerment.routes';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailComponent,
    ProductListComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(productRoutes),
    SharedModule
  ],
  providers: [
    ProductService
  ]
})
export class ProductManagermentModule { }
