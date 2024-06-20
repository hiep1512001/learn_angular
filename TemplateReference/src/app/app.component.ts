import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('txtName') nameTemp:ElementRef | undefined
  title = 'TemplateReference';
  public name:string|undefined
  onGetData(value:any):void{
    console.log(value.value)
  }
  onGetDataTem():void{
  console.log(this.nameTemp?.nativeElement.value);
  }
}
