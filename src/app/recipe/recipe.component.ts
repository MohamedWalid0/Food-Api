import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service' ;
import {ActivatedRoute} from '@angular/router' ;


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  myIngredients:any ;
  myData:any ;
  loaded:boolean = false ;
  constructor(_DataService:DataService , _ActivatedRoute:ActivatedRoute) {

    let idItem = _ActivatedRoute.snapshot.paramMap.get('id');

    _DataService.getRecipeDate(idItem).subscribe((data) => {
      this.myData = data['recipe'] ;
      this.myIngredients = data['recipe']['ingredients'];
      this.loaded=true; 
      
    }) ;
   
  }

  ngOnInit(): void {
  }

}
