import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/header/header.component';
import { RouterModule } from '@angular/router';
import { PanierService } from '../services/panier.service';


@NgModule({
    declarations : [HeaderComponent],
    imports : [CommonModule,RouterModule],
    exports : [HeaderComponent,CommonModule],
    providers : [PanierService]
})
export class ShareModule {}