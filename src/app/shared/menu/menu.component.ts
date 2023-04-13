import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() loggedInUser?: firebase.default.User | null;
  @Output() OnLogout: EventEmitter<boolean> = new EventEmitter<boolean>()
  constructor() {
  }

  /*close() {   menü logout 10.gyak videó kb 40-percnél
    if (logo)
  }*/
}
