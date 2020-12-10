import {RouterModule,Route} from '@angular/router'
import { PanierComponent } from './panier.component';

const PANIER_ROUTING : Route[] = [
    { path :'', component: PanierComponent},
];

export const panierRouting = RouterModule.forChild(PANIER_ROUTING)