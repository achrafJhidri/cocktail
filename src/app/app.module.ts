import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ActiveDirective } from './shared/directives/active.directive';
import { IngredientListComponent } from './panier/ingredient-list/ingredient-list.component';
import { PanierComponent } from './panier/panier.component';
import { AppRouting } from './app.routing'
import { PanierService } from './shared/services/panier.service';
import {CocktailModule} from './cocktail-container/cocktail.module'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ActiveDirective,
    IngredientListComponent,
    PanierComponent,
  ],
  imports: [
    BrowserModule,
    AppRouting,
    FormsModule,
    HttpClientModule,
    CocktailModule
  ],
  providers: [PanierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
