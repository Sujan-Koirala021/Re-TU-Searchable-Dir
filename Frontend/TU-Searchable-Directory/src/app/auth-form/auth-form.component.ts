import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {

  isLogin: boolean = true;
  hasError: boolean = false;
  errorText: string;
  isAuthenticating: boolean = false;


  constructor(private authServive: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogIn(form: NgForm) {
    let email = form.value['email'];
    let password = form.value['password'];
    this.isAuthenticating = true;
    this.authServive.logIn(email, password).subscribe((response) => {
      if(!response.token) {
        this.hasError = true;
        this.errorText = response.message;
        this.isAuthenticating = false;
      } else {
        this.hasError = false;
        this.authServive.setToken(response.token);
        this.authServive.setInfo(response.name, response.email, response.admin);
        this.isAuthenticating = false;
        this.authServive.setLogIn();
        this.router.navigate(['/search']);
      }
    },
    (errorResponse) => {
      console.log(errorResponse);
      this.hasError = true;
      this.errorText = errorResponse.error.message;
      this.isAuthenticating = false;
    });
  }

  onSignUp(form: NgForm) {
    let name = form.value['name'];
    let email = form.value['email'];
    let password = form.value['password'];
    this.isAuthenticating = true;
    this.authServive.signUp(name,email, password).subscribe((response) => {
      console.log(response)
      if(!response.isAuth) {
        this.hasError = true;
        this.errorText = response.message;
        this.isAuthenticating = false;
      } else {
        this.hasError = false;
        this.isAuthenticating = false;
        console.log(response.message);
        this.authServive.setInfo(name, email, false);
        this.authServive.setLogIn();
        this.router.navigate(['/search']);
        
      }
    })
  }

  onCreate() {
    this.isLogin = !this.isLogin;
  }

}
