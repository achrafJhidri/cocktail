import {RouterModule,Route} from '@angular/router'
import { CocktailContainerComponent } from './cocktail-container.component';
import { CocktailEditComponent } from './cocktail-edit/cocktail-edit.component';
import { CocktailsDetailsComponent } from './cocktails-details/cocktails-details.component';

const COCKTAIL_ROUTES : Route[] = [
    { path : 'cocktails',component: CocktailContainerComponent , children : [
        {path : '',component : CocktailsDetailsComponent},
        {path : 'new',component : CocktailEditComponent},
        {path : ':index',component : CocktailsDetailsComponent},
        {path : ':index/edit',component : CocktailEditComponent}
    ]}
];

export const cocktailRouting = RouterModule.forChild(COCKTAIL_ROUTES)