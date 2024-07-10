import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class authGuard implements CanActivate{
  constructor(private _router:Router){

  }
  canActivate(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
      if(localStorage.getItem('user')){
        return true;
      }
      else{
        this._router.navigate(['login'])
        return false;
      }
  }
}