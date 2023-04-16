import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingCardsRoutingModule } from './listing-cards-routing.module';
import { ListingCardsComponent } from './listing-cards.component';
import {MatCardModule} from "@angular/material/card";
import {MatRippleModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


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
    MatCardModule,
    MatRippleModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class ListingCardsModule { }
