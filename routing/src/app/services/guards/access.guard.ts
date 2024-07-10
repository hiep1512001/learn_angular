import { ActivatedRouteSnapshot, CanActivateFn, CanDeactivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { HomeComponent } from '../../components/home/home.component';

export class accessGuard implements CanDeactivate<HomeComponent> {
  canDeactivate():boolean{
    return false;
  }
}
