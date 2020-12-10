import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { ActiveDirective } from './shared/directives/active.directive';
import { IngredientListComponent } from './panier/ingredient-list/ingredient-list.component';
import { PanierComponent } from './panier/panier.component';
import { AppRouting } from './app.routing'
import { PanierService } from './shared/services/panier.service';
import {CocktailModule} from './cocktail-container/cocktail.module'
import { ShareModule } from './shared/modules/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ActiveDirective,
    PanierComponent,
    IngredientListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRouting,
    CocktailModule,
    ShareModule
  ],
  providers: [PanierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
