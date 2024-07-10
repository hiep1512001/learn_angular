import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {

  public _routerService:Router;
  title = 'routing';
  constructor(_routerService:Router){
    this._routerService=_routerService;
  }
  chuyenTrang(url:string):void{
    //this._routerService.navigate([url]);
    this._routerService.navigateByUrl(url);
  }
  onDeleteLocalStorage():void{
    localStorage.removeItem('user');
  }
}

