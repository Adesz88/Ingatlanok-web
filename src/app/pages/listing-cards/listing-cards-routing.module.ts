import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingCardsComponent } from './listing-cards.component';

const routes: Routes = [{ path: '', component: ListingCardsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingCardsRoutingModule { }
