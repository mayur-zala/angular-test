import { Injectable } from '@angular/core';
import { Common } from '@app/utils/common/common';
import { LocalStorageKeys } from '@app/utils/constants';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor() { }

  isLoggedIn(): boolean {
    Common.loginResponse = JSON.parse(localStorage.getItem(LocalStorageKeys.LoginResponse) ?? 'null');
    if (Common.loginResponse) {
      return true;
    } else {
      return false;
    }
  }
}
