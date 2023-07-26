import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isManagerView$ = new BehaviorSubject<boolean>(false);
  private loggedInStatus = false;
  private loggedInStatus$ = new BehaviorSubject<boolean>(false);
  url="http://localhost:9093"
  private isAuthenticated=false
  constructor(private http:HttpClient) { 
    this.initializeLoginStatus(); 
  }

 initializeLoginStatus() {
    const token = localStorage.getItem("token");
    if (token) {
      this.isLoggedIn$.next(true);
      this.checkIfManagerView();
    } else {
      this.isLoggedIn$.next(false);
      this.isManagerView$.next(false);
    }
  }
  doLogin(credentials: any): Observable<any> {
    return this.http.post(`${this.url}/auth/login`, credentials).pipe(
      tap((response: any) => {
        // Handle the response here
        if (response && response.jwtToken) {
          // Store the token in localStorage or a secure cookie
          localStorage.setItem('token', response.jwtToken);
          this.isLoggedIn$.next(true); // Set the isLoggedIn$ BehaviorSubject to true
          this.checkIfManagerView();
        }
      })
    );
  }


  loginUser(token){
    localStorage.setItem("token",token)
    this.isAuthenticated=true
    return of(true)
  }

  isLoggedIn(): Observable<boolean> {
    let token=localStorage.getItem("token")
    if(token==undefined || token==='' || token==null){
      return of(false)
    }else{
      return this.isLoggedIn$.asObservable();      
    }
  }

  logout(){
    localStorage.removeItem("token")
    this.isAuthenticated=false
    this.isLoggedIn$.next(false); // Set the isLoggedIn$ BehaviorSubject to false
    this.isManagerView$.next(false);
    return true
  }

  getToken(){
    return localStorage.getItem("token")
  }

  findUserByEmail(email: string): Observable<any> {
    return this.http.get(`${this.url}/auth/user/${email}`);
  }

  private checkIfManagerView() {
    let token = localStorage.getItem("token");
    if (!token) {
      this.isManagerView$.next(false);
      return;
    }

    // Call your API to check if the user is an admin or not
    this.findUserByEmail(localStorage.getItem('email')).subscribe(
      (data: any) => {
        const isAdmin = data && data.roles && data.roles[0].name === 'Admin';
        this.isManagerView$.next(isAdmin);
      },
      error => {
        console.error('Error while checking if the user is an admin:', error);
        this.isManagerView$.next(false); // Set the default value to false if there's an error.
      }
    );
  }

}
