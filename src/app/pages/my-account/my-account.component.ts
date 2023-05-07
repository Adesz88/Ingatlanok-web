import {Component, OnDestroy} from '@angular/core';
import {ListingService} from "../../shared/services/listing.service";
import {Listing} from "../../shared/models/Listing";
import {AuthService} from "../../shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent {
  loggedInUser?: firebase.default.User | null;
  listings: Array<Listing> = [];

  constructor(private authService: AuthService, private listingService: ListingService, private router: Router) {
    this.authService.isUserLoggedIn().subscribe(user => {
      this.loggedInUser = user;

      if (this.loggedInUser != null) {
        this.listingService.getByUser(user?.email as string).subscribe(listings => {
          this.listings = listings;
        });
      }
    });
  }

  addListing() {
    this.router.navigateByUrl("/add-edit-listing");
  }
}
