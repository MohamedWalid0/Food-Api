import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform( myData:any[] , term:string ) : any [] {

    if (term==undefined || term == ""){
      return myData ;
    }

    let found:any = [] ;

    found = myData.filter( data => {
      return data.title.toLowerCase().includes(term) ;
    })


    return found;


  }

}
