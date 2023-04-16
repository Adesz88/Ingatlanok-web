import {Component, Input} from '@angular/core';
import {Listing} from "../../shared/models/Listing";
import {Router} from "@angular/router";
import {ListingService} from "../../shared/services/listing.service";

@Component({
  selector: 'app-listing-cards',
  templateUrl: './listing-cards.component.html',
  styleUrls: ['./listing-cards.component.scss']
})
export class ListingCardsComponent {
  @Input() listings?: Array<Listing>;
  @Input() edit: boolean = false;

  constructor(private router: Router, private listingService: ListingService) { }

  showDetails(id: string) {
    this.router.navigateByUrl("/listing?id=" + id);
  }

  none() { }

  editListing(id: string) {
    this.router.navigateByUrl("/add-edit-listing?id=" + id);
  }

  deleteListing(id: string) {
    this.listingService.delete(id).then(_ => {
      this.router.navigateByUrl("/my-account");
    }).catch(error => {
      console.error(error);
    });
  }
}
