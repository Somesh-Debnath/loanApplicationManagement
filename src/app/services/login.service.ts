import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url="http://localhost:9093"
  constructor(private http:HttpClient) { }

  doLogin(credentials:any){
    return this.http.post(`${this.url}/auth/login`,credentials)
  }

  loginUser(token){
    localStorage.setItem("token",token)
    return true
  }

  isLoggedIn(){
    let token=localStorage.getItem("token")
    if(token==undefined || token==='' || token==null){
      return false
    }else{
      return true
    }
  }

  logout(){
    localStorage.removeItem("token")
    return true
  }

  getToken(){
    return localStorage.getItem("token")
  }
}
