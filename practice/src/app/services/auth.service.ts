import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiurl='https://reqres.in/api/login';

  constructor(private http:HttpClient) { }
  ProceedLogin(usercred:any){
   return this.http.post(this.apiurl,usercred)
  }
  IsLoggedIn(){
    return localStorage.getItem('token')!=null;
  }
  GetToken(){
    return localStorage.getItem('token')||'';
   }
}