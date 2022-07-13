import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { RouteGuardService } from '@app/core/services/route.guard.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {
  constructor(
    private readonly routeGuardService: RouteGuardService,
    private readonly router: Router
  ) { }
  canActivate(): boolean {
    if (this.routeGuardService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigateByUrl('/auth/login');
      return false;
    }
  }

}
