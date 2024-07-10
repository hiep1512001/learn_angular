
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit  {
  private _router:Router
  public error:number=0;
  public user:any={
      name:'',
      password:''
  }
  constructor(_router:Router){
    this._router=_router;
  }
  ngOnInit(): void {

    if(localStorage.getItem('user')){
      this._router.navigate(['home']);
    }
  }
  onLogin():void{
    let user_name=this.user.name;
    let password=this.user.password;
    if(user_name='admin'&& password=='admin'){
      this.error=0;
      localStorage.setItem('user',JSON.stringify(this.user));
    }
    else{
      this.error=-1;
    }
  }
}
