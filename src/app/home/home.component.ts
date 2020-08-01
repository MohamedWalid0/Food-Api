import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service' ;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  myData:any = [] ;
  searchTerm:any ;

  constructor( private _DataService:DataService ) { 
    let foundData = [] ;
    foundData = _DataService.getData() ;

    for (let i of foundData){
      i.subscribe (data =>{
        for(let j of data.recipes){
          this.myData.push(j); 
        }

      })

    }      
  }

  ngOnInit(): void {
  }

}
