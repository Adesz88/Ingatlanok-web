import { Component } from '@angular/core';
import {ListingService} from "../../shared/services/listing.service";
import {Listing} from "../../shared/models/Listing";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  listings: Array<Listing> = [];

  constructor(private listingService: ListingService) {
    this.listingService.getAll().subscribe(listings => {
      this.listings = listings;
    });
  }
}
