import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../shared/model/Ingredient.model';
import { PanierService} from '../../shared/services/panier.service'
@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit,OnDestroy {
  public ingredients : Ingredient[] = [];
  private subscription : Subscription ;
  constructor(private panierService : PanierService) { }

  ngOnInit(): void {
    this.subscription = this.panierService.ingredients.subscribe((ingredients : Ingredient[] ) => {
      this.ingredients = ingredients;
    })
  }

  ngOnDestroy():void{
   this.subscription.unsubscribe();
  }

}
