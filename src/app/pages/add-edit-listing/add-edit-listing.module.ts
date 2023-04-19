import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEditListingRoutingModule } from './add-edit-listing-routing.module';
import { AddEditListingComponent } from './add-edit-listing.component';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {FlexModule} from "@angular/flex-layout";


@NgModule({
  declarations: [
    AddEditListingComponent
  ],
    imports: [
        CommonModule,
        AddEditListingRoutingModule,
        MatCardModule,
        MatInputModule,
        ReactiveFormsModule,
        MatButtonModule,
        FlexModule
    ]
})
export class AddEditListingModule { }
