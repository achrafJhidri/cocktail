import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { panierRouting } from './panier.routing';
import { PanierComponent } from './panier.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';


@NgModule({
  declarations: [
    PanierComponent,
    IngredientListComponent
  ],
  imports: [
    CommonModule,
    panierRouting
  ],
  providers : [],
  exports : []
})
export class PanierModule { }
