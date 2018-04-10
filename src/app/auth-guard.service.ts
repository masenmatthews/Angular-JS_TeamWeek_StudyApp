import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { AuthService } from "./auth.service";
import { auth } from 'firebase/app';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, public authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<boolean> {
    return this.authService.afAuth.authState
    .take(1)
    .map(authState => !!authState)
    .do(authenticated => {
      if (!authenticated) {
        alert ("GET OUTTA HERE");
        this.router.navigate(['/']);
        return false;
      } else {
        return true;
      }
    });
  }
}