import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ListingService} from "../../shared/services/listing.service";
import {Listing} from "../../shared/models/Listing";
import {UserService} from "../../shared/services/user.service";
import {AuthService} from "../../shared/services/auth.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {User} from "../../shared/models/User";

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent {
  id: string;
  listing?: Listing;
  user?: User;

  constructor(private router: Router, private listingService: ListingService, private userService: UserService) {
    this.id = this.router.getCurrentNavigation()?.finalUrl?.queryParams["id"];

    if (this.id === undefined || this.id === "") {
      this.router.navigateByUrl("/main");
    }

    this.listingService.get(this.id).subscribe(data => {
      if (data === undefined) {
        this.router.navigateByUrl("/main");
      }
      this.listing = data;

      this.userService.getByEmail(this.listing?.user as string).subscribe(data => {
        this.user = data[0];
      }, error => {
        console.log(error);
      });
    }, error => {
      this.router.navigateByUrl("/main");
      console.log(error);
    });
  }
}
