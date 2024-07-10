import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// pipe
import { CapitalpipePipe } from './pipe/capitalpipe.pipe';
@NgModule({
  declarations: [
    CapitalpipePipe
  ],
  exports:[
    CapitalpipePipe,
    CommonModule
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
