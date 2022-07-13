import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/core/services/authentication.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor(
    private readonly authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  logOut(): void {
    this.authenticationService.logOut();
  }

}
