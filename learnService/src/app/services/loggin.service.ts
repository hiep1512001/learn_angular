import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogginService {

  constructor() { }

  loggin():void{
    alert("Heelo service")
  }
}
