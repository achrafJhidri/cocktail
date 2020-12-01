import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs'
import { filter,map } from 'rxjs/operators'
import { Cocktail } from '../model/Cocktail.model';
import {Ingredient} from '../model/Ingredient.model'

@Injectable()
export class CocktailService {

  
 
  public cocktails : BehaviorSubject<Cocktail[]> = new BehaviorSubject(null);
  constructor(private httpClient : HttpClient) {
      this.initCocktail()
   }

  initCocktail() : void {
    this.httpClient.get<Cocktail[]>("https://cocktails-5e905.firebaseio.com/cocktails.json")
    .subscribe( (cocktails : Cocktail[]) => this.cocktails.next(cocktails))
  }


 
  getCocktail(index: number): Observable<Cocktail> {
    return this.cocktails.pipe(
      filter(( cocktails : Cocktail[])=> cocktails !== null),
      map ((cocktails: Cocktail[])=> cocktails[index])
    )
  }
  
  addCocktail(cocktail :Cocktail  ) : void {
    const cocktails = this.cocktails.value.slice(); 
    cocktails.push(new Cocktail(cocktail.name,cocktail.description,cocktail.img,cocktail.ingredients.map(
      ingredient => new Ingredient(ingredient.name,ingredient.quantity)
    )))
    this.cocktails.next(cocktails);
    
    this.save();
  }
  editCocktail(editedCocktail: Cocktail) {
    const cocktails = this.cocktails.value.slice(); 
    const index = cocktails.map( c => c.name).indexOf(editedCocktail.name)  
 
    cocktails[index]=editedCocktail;
    this.cocktails.next(cocktails);
   
    this.save();
  }
  save() {
    this.httpClient.put("https://cocktails-5e905.firebaseio.com/cocktails.json",this.cocktails.value).subscribe();
  }
  
}
