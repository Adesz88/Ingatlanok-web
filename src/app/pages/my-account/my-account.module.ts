import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAccountRoutingModule } from './my-account-routing.module';
import { MyAccountComponent } from './my-account.component';
import {ListingCardsModule} from "../listing-cards/listing-cards.module";


@NgModule({
  declarations: [
    MyAccountComponent
  ],
    imports: [
        CommonModule,
        MyAccountRoutingModule,
        ListingCardsModule
    ]
})
export class MyAccountModule { }
