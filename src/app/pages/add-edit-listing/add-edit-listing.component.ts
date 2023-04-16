import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl} from "@angular/forms";
import {ListingService} from "../../shared/services/listing.service";
import {Listing} from "../../shared/models/Listing";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {AuthService} from "../../shared/services/auth.service";

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
  rooms = new FormControl("");
  heating = new FormControl("");
  description = new FormControl("");

  id: string;
  listing?: Listing;
  loggedInUser?: firebase.default.User | null;
  constructor(private router: Router, private listingService: ListingService, private authService: AuthService) {
    this.id = this.router.getCurrentNavigation()?.finalUrl?.queryParams["id"];
    this.authService.isUserLoggedIn().subscribe(user => {
      this.loggedInUser = user;
    });

    if (this.id != undefined) {
      this.listingService.get(this.id).subscribe(listing => {
        this.listing = listing;
        this.title.setValue(this.listing?.name as string);
        this.price.setValue(this.listing?.price as unknown as string);
        this.city.setValue(this.listing?.city as string);
        this.street.setValue(this.listing?.street as string);
        this.size.setValue(this.listing?.size as unknown as string);
        this.rooms.setValue(this.listing?.rooms as unknown as string);
        this.heating.setValue(this.listing?.heating as string);
        this.description.setValue(this.listing?.description as string);
      })
      console.log(this.id)
    } else {

    }
  }

  updateListing(){
    if (this.title.value != null && this.price.value != null && this.city.value != null && this.street.value != null
      && this.size != null && this.rooms.value != null && this.heating.value != null && this.description.value != null
      && this.listing != undefined) {
      this.listing.name = this.title.value;
      this.listing.price = this.price.value as unknown as number;
      this.listing.city = this.city.value;
      this.listing.street = this.street.value;
      this.listing.size = this.size.value as unknown as number;
      this.listing.heating = this.heating.value;
      this.listing.rooms = this.rooms.value as unknown as number;
      this.listing.description = this.description.value;

      this.listingService.update(this.listing).then(_ => {
        this.router.navigateByUrl("/my-account");
      }).catch(error => {
        console.error(error);
      });
    }
  }

  addListing() {
    if (this.title.value != null && this.price.value != null && this.city.value != null && this.street.value != null
      && this.size != null && this.rooms.value != null && this.heating.value != null && this.description.value != null
      && this.loggedInUser != null && this.loggedInUser.email != null) {
      this.listing = {
        name: this.title.value,
        price: this.price.value as unknown as number,
        city: this.city.value,
        street: this.street.value,
        size: this.size.value as unknown as number,
        rooms: this.rooms.value as unknown as number,
        heating: this.heating.value,
        description: this.description.value,
        user: this.loggedInUser.email,
        imageURL: "https://firebasestorage.googleapis.com/v0/b/ingatlanok-web.appspot.com/o/Images%2Fno_image.jpeg?alt=media&token=6d9098c0-a2fd-49b7-8f9a-c1b4ba28ed3a",
        id: ""
      }

      this.listingService.create(this.listing).then(_ => {
        this.router.navigateByUrl("/my-account");
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
