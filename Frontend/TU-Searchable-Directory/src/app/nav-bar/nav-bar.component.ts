import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  headerTag: string;
  name: string;
  admin: boolean;

  constructor(private authService: AuthService, private router: Router) { 
    this.headerTag = 'LogIn';
    this.admin = false;
    this.authService.statusUpdate.subscribe((isLoggedIn: boolean) => {
      this.setStatus(isLoggedIn);
    })
  }

  ngOnInit(): void {
    this.setStatus(this.authService.isLoggedIn);
  }

  setStatus(isLoggedIn: boolean) {
    if(isLoggedIn) {
      this.headerTag = 'Sign Out';
      this.name = this.authService.name;
      this.admin = this.authService.admin;
    } else {
      this.headerTag = 'Log In';
      this.admin = false;
      this.name = '';
    }
  }

  onAuth() {
    if(this.headerTag == 'Sign Out') {
      this.authService.signOut();
      this.router.navigate(['/search']);
    } else {
      this.router.navigate(['/auth']);
    }
  }

}
