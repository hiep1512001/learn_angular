import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ProductManagermentModule } from './product_managerment/product-managerment.module';
//component
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
//service
import { authGuard } from './services/guards/auth.guard';
import { accessGuard } from './services/guards/access.guard';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    //roter app import sau modul con
    ProductManagermentModule,
    AppRoutingModule,
    FormsModule
   
  ],
  providers: [
    authGuard,
    accessGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
