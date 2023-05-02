import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {ListingCardsModule} from "../listing-cards/listing-cards.module";
import {DateFormatPipe} from "../../shared/pipes/date-format.pipe";


@NgModule({
  declarations: [
    MainComponent,
    DateFormatPipe
  ],
  exports: [
    DateFormatPipe
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatCardModule,
    MatGridListModule,
    ListingCardsModule
  ]
})
export class MainModule { }
