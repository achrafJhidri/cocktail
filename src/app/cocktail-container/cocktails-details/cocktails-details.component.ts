import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute,  ParamMap  } from '@angular/router';
import { Cocktail } from "../../shared/model/Cocktail.model"
import { CocktailService } from '../../shared/services/cocktail.service';
import { PanierService } from '../../shared/services/panier.service';

@Component({
  selector: 'app-cocktails-details',
  templateUrl: './cocktails-details.component.html',
  styleUrls: ['./cocktails-details.component.css']
})
export class CocktailsDetailsComponent implements OnInit {
  public selectedCocktail : Cocktail ;
  public index : number;
  
  constructor(
      private activatedRoute : ActivatedRoute,
      private cocktailService : CocktailService,
      private panierService : PanierService    
    ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params : ParamMap) => {
      if ( params.get("index") )
        this.index  = +params.get("index");
      else 
        this.index = 0;

      this.cocktailService.getCocktail(this.index).subscribe((cocktail : Cocktail) => {
        this.selectedCocktail=cocktail
      });

    })
  }
  addToPanier():void{
    if(this.selectedCocktail.ingredients?.length > 0)
    this.panierService.addIngredients(this.selectedCocktail.ingredients);
  }
  getUrl() : string[] {
    return ["/cocktails",this.index+"","edit"];
  }

}
