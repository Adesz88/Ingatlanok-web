import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingCardsRoutingModule } from './listing-cards-routing.module';
import { ListingCardsComponent } from './listing-cards.component';
import {MatCardModule} from "@angular/material/card";


@NgModule({
    declarations: [
        ListingCardsComponent
    ],
    exports: [
        ListingCardsComponent
    ],
  imports: [
    CommonModule,
    ListingCardsRoutingModule,
    MatCardModule
  ]
})
export class ListingCardsModule { }
