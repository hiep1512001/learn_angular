import { Component } from '@angular/core';
import { LogginService } from '../../services/loggin.service';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrl: './second-component.component.css'
})
export class SecondComponentComponent {
  private _logginSerVice : LogginService;
  constructor(
    _logginSerVice:LogginService
  ){
    this._logginSerVice=_logginSerVice;
  }
  onClickMe():void{
    this._logginSerVice.loggin();
  }
  Loggin():void{
    alert("Xin chào các bạn!")
  }
}
