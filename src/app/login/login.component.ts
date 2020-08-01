import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup , Validators } from '@angular/forms' ;
import {AuthService} from '../auth.service' ;
import {Router} from '@angular/router' ;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup = new FormGroup({
    "email" : new FormControl() ,
    "password" : new FormControl() ,
  })

  constructor(private _AuthService:AuthService ,  private _Router:Router) { }

  getLoginData(data) {
    this._AuthService.getLoginData(data.value).subscribe( data =>{
      if(data.message == "success" ){
        this._AuthService.saveUserDate(data.user) ;
        this._Router.navigate(['/home'])
      }
     })
    
  }



  ngOnInit(): void {
  }

}
