import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl} from "@angular/forms";
import {ListingService} from "../../shared/services/listing.service";
import {Listing} from "../../shared/models/Listing";

@Component({
  selector: 'app-add-edit-listing',
  templateUrl: './add-edit-listing.component.html',
  styleUrls: ['./add-edit-listing.component.scss']
})
export class AddEditListingComponent {
  title = new FormControl("");
  price = new FormControl("");
  city = new FormControl("");
  street = new FormControl("");
  size = new FormControl("");
  heating = new FormControl("");
  description = new FormControl("");

  id: string;
  listing?: Listing;
  constructor(private router: Router, private listingService: ListingService) {
    this.id = this.router.getCurrentNavigation()?.finalUrl?.queryParams["id"];
    this.listingService.get(this.id).subscribe(listing => {
      this.listing = listing;
      this.title.setValue(this.listing?.name as string);
      this.price.setValue(this.listing?.price as unknown as string);
      this.city.setValue(this.listing?.city as string);
      this.street.setValue(this.listing?.street as string);
      this.size.setValue(this.listing?.size as unknown as string);
      this.heating.setValue(this.listing?.heating as string);
      this.description.setValue(this.listing?.description as string);
    })
    console.log(this.id)

  }
}
