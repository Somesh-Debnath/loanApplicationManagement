import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  createUrlTreeFromSnapshot,
} from '@angular/router';
import { map } from 'rxjs';
import { LoginService } from '../services/login.service';


export const AuthGuard = (next: ActivatedRouteSnapshot) => {
  return inject(LoginService)
    .isLoggedIn()
    .pipe(
      map((isLoggedIn) =>
        isLoggedIn ? true : createUrlTreeFromSnapshot(next, ['/', 'login'])
      )
    );
};