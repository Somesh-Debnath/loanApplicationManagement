import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { UserRole } from 'src/app/customer';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  isUserLoggedIn: boolean;
  userRole: UserRole = new UserRole('');

  constructor(private loginService: LoginService, private router: Router) {
    this.loginService.initializeLoginStatus();
  }

  ngOnInit() {
    this.isLoggedIn$ = this.loginService.isLoggedIn();

    this.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isUserLoggedIn = isLoggedIn;
    });

    this.loginService.findUserByEmail(localStorage.getItem('email')).subscribe(
      (data: any) => {
        this.userRole = new UserRole(data.roles[0].name); 
        console.log(this.userRole.value);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    alert('You have successfully signed out.');
    localStorage.removeItem('token');
    this.router.navigate(['/']);
    this.loginService.logout();
  }

}
