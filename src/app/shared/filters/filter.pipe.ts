import { Pipe, PipeTransform } from '@angular/core';
import {Cocktail} from '../model/Cocktail.model'
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(cocktails: Cocktail[], search: string ) : Cocktail[]  {
    
    if(!search.length)
       return cocktails;
    else {
      return cocktails.filter((cocktail : Cocktail) => 
        cocktail.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  }

}
