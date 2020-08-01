import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textLess'
})
export class TextLessPipe implements PipeTransform {

  transform(title:string): unknown {
    if ( title.length > 15 ){
      return title.slice(0,15) + "...";
    }
    else {
      return title ;
    }
  }

}
