import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , BehaviorSubject } from 'rxjs';
import jwtDecode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUserData:any

  constructor(private _httpClient:HttpClient) {
    if(localStorage.getItem("currentUser") == null){
      this.currentUserData = new BehaviorSubject(null);
    }
    else{
      this.currentUserData = new BehaviorSubject(localStorage.getItem("currentUser"));
    }
  }

  

  register(formData:any):Observable<any>{
    return this._httpClient.post("https://routeegypt.herokuapp.com/signup",formData)
  }

  login(formData:any):Observable<any>{
    return this._httpClient.post("https://routeegypt.herokuapp.com/signin",formData)
  }

  logout(token:any):Observable<any>{
    return this._httpClient.post("https://routeegypt.herokuapp.com/signOut" , {"token":token})
  }

  saveCurrentUserData(){
    let encoded:any = localStorage.getItem("currentUser");
    let decoded = jwtDecode(encoded);
    this.currentUserData.next(decoded);
  }
}
