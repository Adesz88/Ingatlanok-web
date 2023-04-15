import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditListingComponent } from './add-edit-listing.component';

const routes: Routes = [{ path: '', component: AddEditListingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddEditListingRoutingModule { }
