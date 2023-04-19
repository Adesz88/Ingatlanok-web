import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {FlexModule} from "@angular/flex-layout";


@NgModule({
  declarations: [
    RegisterComponent
  ],
    imports: [
        CommonModule,
        RegisterRoutingModule,
        MatCardModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        FlexModule
    ]
})
export class RegisterModule { }
