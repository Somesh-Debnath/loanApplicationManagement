import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs'; // Import Observable
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>; 
  isManagerView$: Observable<boolean>;
  constructor(private loginService: LoginService, private router: Router) {

  }
  ngOnInit() {
    this.isLoggedIn$ = this.loginService.isLoggedIn();
    this.isManagerView$ = this.loginService.isManagerView();
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

  isManagerView(){
    this.loginService.findUserByEmail(localStorage.getItem('email')).subscribe((data:any)=>{
      if(data.role=='Admin'){
        console.log(data.role);
        return true;
      }
      else{
        return false;
      }
    }
    );
  }
  
}
