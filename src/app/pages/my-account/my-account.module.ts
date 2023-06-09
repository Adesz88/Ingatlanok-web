import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAccountRoutingModule } from './my-account-routing.module';
import { MyAccountComponent } from './my-account.component';
import {ListingCardsModule} from "../listing-cards/listing-cards.module";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {FlexModule} from "@angular/flex-layout";


@NgModule({
  declarations: [
    MyAccountComponent
  ],
  imports: [
    CommonModule,
    MyAccountRoutingModule,
    ListingCardsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FlexModule
  ]
})
export class MyAccountModule { }
