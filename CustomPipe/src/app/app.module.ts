import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormatdataPipe } from './pipe/formatdata.pipe';
import { FilterPipe } from './pipe/filter.pipe';
import { SortNumberPipe } from './pipe/sort-number.pipe';
import { CapitalpipePipe } from './pipe/capitalpipe.pipe';
import { SortTablePipe } from './pipe/sort-table.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormatdataPipe,
    FilterPipe,
    SortNumberPipe,
    CapitalpipePipe,
    SortTablePipe
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
