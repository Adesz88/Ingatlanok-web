import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingRoutingModule } from './listing-routing.module';
import { ListingComponent } from './listing.component';
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    ListingComponent
  ],
    imports: [
        CommonModule,
        ListingRoutingModule,
        MatCardModule
    ]
})
export class ListingModule { }
