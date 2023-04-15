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

  constructor(private router: Router) { }

  showDetails(id: string) {
    this.router.navigateByUrl("/listing?id=" + id);
  }
}
