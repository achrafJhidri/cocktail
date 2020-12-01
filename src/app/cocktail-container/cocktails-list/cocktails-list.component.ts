import { Component,  OnInit  } from '@angular/core';
import {Cocktail} from '../../shared/model/Cocktail.model';
import { CocktailService } from '../../shared/services/cocktail.service';
import { FilterPipe} from '../../shared/filters/filter.pipe'
@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css'],
  providers : [FilterPipe]
})
export class CocktailsListComponent implements OnInit {
  public search : string ='';
  public cocktails : Cocktail[] ;
  
  constructor(private cocktailService: CocktailService) { }

  ngOnInit(): void {
    this.cocktailService.cocktails.subscribe((cocktails : Cocktail[]) => {
      this.cocktails=cocktails;
    });
  }


}
