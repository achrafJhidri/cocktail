import { Injectable } from '@angular/core';
import {Ingredient} from '../model/Ingredient.model'
import {BehaviorSubject} from 'rxjs'
@Injectable()
export class PanierService {

  public ingredients : BehaviorSubject<Ingredient[]> = new BehaviorSubject<Ingredient[]>([]);

  constructor() { }

  addIngredients(ingredients : Ingredient[]):void {
    const currentValue = this.ingredients.value;
    
    if ( currentValue.length ){
      this.ingredients.next(currentValue.concat(ingredients));
    }else {
      this.ingredients.next(ingredients);
    }
  }
}
