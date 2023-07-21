import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn$ = new BehaviorSubject<boolean>(false);
  url="http://localhost:9093"
  private isAuthenticated=false
  constructor(private http:HttpClient) { }

  doLogin(credentials: any): Observable<any> {
    return this.http.post(`${this.url}/auth/login`, credentials).pipe(
      tap((response: any) => {
        // Handle the response here
        if (response && response.jwtToken) {
          // Store the token in localStorage or a secure cookie
          localStorage.setItem('token', response.jwtToken);
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
      return of(true)
    }
  }

  logout(){
    localStorage.removeItem("token")
    this.isAuthenticated=false
    return true
  }

  getToken(){
    return localStorage.getItem("token")
  }

  findUserByEmail(email: string): Observable<any> {
    return this.http.get(`${this.url}/auth/user/${email}`);
  }

  isManagerView(): Observable<boolean> {
    let token=localStorage.getItem("token")
    if(token==undefined || token==='' || token==null){
      return of(false)
    }else{
      return of(true)
    }
  }

}
