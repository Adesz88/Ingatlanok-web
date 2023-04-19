import { Component } from '@angular/core';
import {AuthService} from "./shared/services/auth.service";
import {Router} from "@angular/router";
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ingatlanok-web';
  loggedInUser?: firebase.default.User | null;

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
    this.authService.logout().then(() => {
      console.log('Logged out successfully');
      this.router.navigateByUrl("/main");
    }).catch(error => {
      console.error(error);
    });
  }

  protected readonly onclose = onclose;
}
