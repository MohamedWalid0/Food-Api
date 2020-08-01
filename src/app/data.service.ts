import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' ;
import {ActivatedRoute} from '@angular/router' ;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _HttpClient : HttpClient ,private _ActivatedRoute:ActivatedRoute) { }

  types = ['avocado' , 'pizza' , 'pineapple' , 'chicken' , 'chocolate' , 'rendang' ,'fish' ,'sushi']

  getData(){
    let found = [];
    for(let i of this.types){
      found.push(this._HttpClient.get(`https://forkify-api.herokuapp.com/api/search?q=${i}`));
    }
    return found ;
  }

  getRecipeDate(id){
    return this._HttpClient.get(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
  
  }

}
