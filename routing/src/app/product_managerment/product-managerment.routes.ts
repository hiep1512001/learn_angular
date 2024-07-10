import { ProductsComponent } from './components/products/products.component'; 
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { authGuard } from '../services/guards/auth.guard'; 
import { Routes } from '@angular/router';
export const productRoutes: Routes=[
    {
        path:'product',
        component:ProductsComponent,
        children:[
          {
            path:':id',
            component:ProductDetailComponent
          },
          {
            path:'edit/:id',
            component:EditProductComponent
          }
        ]
    },
    {
      canActivate:[authGuard],
      path:'products',
      component:ProductListComponent
    },
]
