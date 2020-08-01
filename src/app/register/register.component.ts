import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup , Validators } from '@angular/forms' ;
import {AuthService} from '../auth.service' ;
import {Router} from '@angular/router' ;


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm:FormGroup = new FormGroup({
    "first_name" : new FormControl() ,
    "last_name" : new FormControl() ,
    "age" : new FormControl() ,
    "email" : new FormControl() ,
    "password" : new FormControl() 
  })

 
  constructor( private _AuthService:AuthService ,  private _Router:Router) { }

  getRegData(data){

    this._AuthService.sendRegData(data.value).subscribe( (data)=>{
      console.log (data.message)
      
      if(data.message == "success" ){
        console.log("tmaam") ;
        this._Router.navigate(['/login'])
      }


      
    }) ;

  }

 

  ngOnInit(): void {
  }

}
