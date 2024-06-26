import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StructualComponent } from './components/structual/structual.component';
import { FormsModule } from '@angular/forms';
import { AttributeComponent } from './components/attribute/attribute.component';
@NgModule({
  declarations: [
    AppComponent,
    StructualComponent,
    AttributeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
