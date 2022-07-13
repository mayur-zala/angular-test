import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from '@app/core/models/login.request';
import { AuthenticationService } from '@app/core/services/authentication.service';
import { Common } from '@app/utils/common/common';
import { LocalStorageKeys } from '@app/utils/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;
  loginRequest!: LoginRequest;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authenticationService: AuthenticationService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  get email(): AbstractControl { return this.loginForm.controls['email']; }
  get password(): AbstractControl { return this.loginForm.controls['password']; }

  onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.loginRequest = this.loginForm.value as LoginRequest;
      this.authenticationService.login(this.loginRequest).subscribe(
        (response) => {
          Common.loginResponse = response;
          localStorage.setItem(LocalStorageKeys.LoginResponse, JSON.stringify(Common.loginResponse));
          this.router.navigateByUrl('/dashboard');
        }
      );
    }
  }

}
