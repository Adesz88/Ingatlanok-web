import {Component, DoCheck, EventEmitter, Input, Output} from '@angular/core';
import {Notification} from "../models/Notification";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements DoCheck{
  @Input() loggedInUser?: firebase.default.User | null;
  @Input() notifications?: Array<Notification>;
  @Output() onCloseSidenav: EventEmitter<boolean> = new EventEmitter();
  @Output() onLogout: EventEmitter<boolean> = new EventEmitter();
  @Output() onDelete: EventEmitter<boolean> = new EventEmitter();

  badgeHide: boolean = true;
  constructor() {
  }

  ngDoCheck() {
    if (this.notifications?.length) {
      this.badgeHide = false;
    } else {
      this.badgeHide = true;
    }
  }

  isNew(notification: Notification) {
    let currentDate = new Date();
    let paramDate = new Date(notification.date);
    if (paramDate.getDay() === currentDate.getDay() && paramDate.getMonth() === currentDate.getMonth()
      && paramDate.getFullYear() === currentDate.getFullYear()) {
      return true;
    }
    return false;
  }

  close(logout?: boolean, deleteNotification?: boolean) {
    if (logout === true) {
      this.onLogout.emit(logout);
    } else if (deleteNotification === true) {
      this.onDelete.emit(deleteNotification);
    }
    this.onCloseSidenav.emit(true);
  }
}
