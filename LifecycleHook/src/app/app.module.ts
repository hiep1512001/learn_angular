import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifeCycleHookComponent } from './components/life-cycle-hook/life-cycle-hook.component';
import { OtherCycleComponentComponent } from './components/other-cycle-component/other-cycle-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeCycleHookComponent,
    OtherCycleComponentComponent
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
