import { Component } from '@angular/core';
import {ListingService} from "../../shared/services/listing.service";
import {Listing} from "../../shared/models/Listing";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent {
  loggedInUser?: firebase.default.User | null;
  listings: Array<Listing> = [];
  constructor(private authService: AuthService, private listingService: ListingService) {
    this.authService.isUserLoggedIn().subscribe(user => {
      this.loggedInUser = user;
      this.listingService.getByUser(user?.email as string).subscribe(listings => {
        this.listings = listings;
      });
    });

  }
}
