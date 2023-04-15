import { Component } from '@angular/core';
import {ListingService} from "../../shared/services/listing.service";
import {Listing} from "../../shared/models/Listing";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  listings: Array<Listing> = [];
  image?: string;

  constructor(private router: Router, private listingService: ListingService) {
    this.listingService.getAll().subscribe(listings => {
      this.listings = listings;
    });
  }

  showDetails(id: string) {
    this.router.navigateByUrl("/listing?id=" + id);
  }
}
