import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { ActiveDirective } from './shared/directives/active.directive';
import { AppRouting } from './app.routing'
import { PanierService } from './shared/services/panier.service';
import {CocktailModule} from './cocktail-container/cocktail.module'
import { ShareModule } from './shared/modules/shared.module';
import { PanierModule } from './panier/panier.module';

@NgModule({
  declarations: [
    AppComponent,
    ActiveDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRouting,
    CocktailModule,
    PanierModule,
    ShareModule
  ],
  providers: [PanierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
