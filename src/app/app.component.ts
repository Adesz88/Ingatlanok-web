import {Component, DoCheck, OnChanges, OnInit} from '@angular/core';
import {AuthService} from "./shared/services/auth.service";
import {Router} from "@angular/router";
import {MatSidenav} from "@angular/material/sidenav";
import {Notification} from "./shared/models/Notification";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck{
  title = 'Ingatlanok-web';
  loggedInUser?: firebase.default.User | null;
  notifications: Array<Notification> = new Array<Notification>();
  badgeHide: boolean = true;

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.isUserLoggedIn().subscribe(user => {
      console.log(user);
      this.loggedInUser = user;
      localStorage.setItem('user', JSON.stringify(this.loggedInUser));
    }, error => {
      console.error(error);
      localStorage.setItem('user', JSON.stringify('null'));
    });

    this.notifications[0] = {
      description: "Eladó családi ház",
      id: 'jdkjds',
      date: 'Tue May 02 2023 18:39:19 GMT+0200 (Central European Summer Time)'
    };

    this.notifications[1] = {
      description: "13. kerületi tégla lakás",
      id: 'jdkjds',
      date: 'Tue May 01 2023 18:39:19 GMT+0200 (Central European Summer Time)'
    };

    this.notifications[2] = {
      description: "Eladó ikerház",
      id: 'jdkjds',
      date: 'Tue May 02 2022 18:39:19 GMT+0200 (Central European Summer Time)'
    };
  }

  ngDoCheck() {
    if (this.notifications.length != 0) {
      this.badgeHide = false;
    } else {
      this.badgeHide = true;
    }
  }

  onToggleSidenav(sidenav: MatSidenav) {
    sidenav.toggle();
  }

  onClose(event: any, sidenav: MatSidenav) {
    if (event === true) {
      sidenav.close();
    }
  }

  logout(_?: boolean) {
    this.router.navigateByUrl("/main");
    this.authService.logout().then(() => {
      console.log('Logged out successfully');
    }).catch(error => {
      console.error(error);
    });
  }

  delete() {
    this.notifications = new Array<Notification>();
  }
}
