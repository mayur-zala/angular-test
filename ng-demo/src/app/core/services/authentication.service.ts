import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponse } from '../models/login.response';
import { APIUrls } from '@app/utils/apiUrls';
import { LoginRequest } from '../models/login.request';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private readonly httpClient: HttpClient,
    private readonly router: Router
  ) { }

  login(payload: LoginRequest): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(APIUrls.login, payload);
  }

  logOut(): void {
    localStorage.clear();
    this.router.navigateByUrl('/auth/login');
  }
}
