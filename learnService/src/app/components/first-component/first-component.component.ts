import { Component } from '@angular/core';
import { LogginService } from '../../services/loggin.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
 
  constructor(
    private _LogginService:LogginService){
  }
  onClick():void{
   this._LogginService.loggin();
  }
}
