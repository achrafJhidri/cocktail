import {Route, RouterModule } from '@angular/router'
import { PanierModule } from './panier/panier.module';


const APP_ROUTE : Route[] = [
    { path : '',redirectTo : "cocktails",pathMatch:"full"},
    { path : 'panier', loadChildren :'./panier/panier.module#PanierModule'}
]


export const AppRouting = RouterModule.forRoot(APP_ROUTE);