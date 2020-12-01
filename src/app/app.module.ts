import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CocktailsListComponent } from './cocktail-container/cocktails-list/cocktails-list.component';
import { CocktailsDetailsComponent } from './cocktail-container/cocktails-details/cocktails-details.component';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { ActiveDirective } from './shared/directives/active.directive';
import { IngredientListComponent } from './panier/ingredient-list/ingredient-list.component';
import { PanierComponent } from './panier/panier.component';
import { AppRouting } from './app.routing'
import { PanierService } from './shared/services/panier.service';
import { CocktailEditComponent } from './cocktail-container/cocktail-edit/cocktail-edit.component';
import { FilterPipe } from './shared/filters/filter.pipe'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CocktailsListComponent,
    CocktailsDetailsComponent,
    CocktailContainerComponent,
    ActiveDirective,
    IngredientListComponent,
    PanierComponent,
    CocktailEditComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRouting,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PanierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
