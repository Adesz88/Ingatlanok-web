import {Component, Input} from '@angular/core';
import {Listing} from "../../shared/models/Listing";
import {Router} from "@angular/router";

@Component({
  selector: 'app-listing-cards',
  templateUrl: './listing-cards.component.html',
  styleUrls: ['./listing-cards.component.scss']
})
export class ListingCardsComponent {
  @Input() listings?: Array<Listing>;
  @Input() edit?: boolean;

  constructor(private router: Router) { }

  showDetails(id: string) {
    if (this.edit) {
      this.router.navigateByUrl("/add-edit-listing?id=" + id);
    } else {
      this.router.navigateByUrl("/listing?id=" + id);
    }

  }
}
