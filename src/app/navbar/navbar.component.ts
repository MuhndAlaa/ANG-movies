import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: '[app-navbar]',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  isLogin:Boolean = false;


  constructor(private _auth:AuthService , private _router:Router) {
    this._auth.currentUserData.subscribe(()=>{
      if(this._auth.currentUserData.getValue() == null){
        this.isLogin = false;
      }
      else{
        this.isLogin = true;
      }
    })
   }


  ngOnInit(): void {}

  logOut(){
    console.log(localStorage.getItem("currentUser"))
    this._auth.logout(localStorage.getItem("currentUser")).subscribe((response)=>{
      if(response.message == "success"){
        localStorage.removeItem("currentUser");
        this.isLogin = false;
        this._router.navigate(["/login"]);
      }
    })
  }

  



}
