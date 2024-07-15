import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { DataDrivenFormComponent } from './components/data-driven-form/data-driven-form.component';
import { ErrorsValidateComponent } from './components/errors-validate/errors-validate.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    DataDrivenFormComponent,
    ErrorsValidateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //module sử dụng data-driven form
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
