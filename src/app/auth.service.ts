import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' ;
import {Observable ,BehaviorSubject} from 'rxjs' ;
import {userData} from 'userData' ;
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }

  user = new BehaviorSubject(null) ;

  sendRegData(data):Observable<any>
  {
    return this._HttpClient.post("http://routeegypt.herokuapp.com/signup" , data) ;
  }

  getLoginData(data):Observable<any>
  {
    return this._HttpClient.post("http://routeegypt.herokuapp.com/signin" , data) ;
  }

  saveUserDate(citizen){
    // let user = new userData(citizen.first_name ,citizen.last_name , citizen.email , token) ;
    this.user.next(this.user) ;
    console.log(this.user) ;
  }

  

}
