import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild
{
  constructor( private authService : AuthService,
               private router : Router ) {
  }

  // @ts-ignore
  canActivateChild( childRoute: ActivatedRouteSnapshot,
                    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {
    return true ;
    if( this.authService.isAuth ) return true ;
    else this.router.navigateByUrl('/login' );
  }
}
