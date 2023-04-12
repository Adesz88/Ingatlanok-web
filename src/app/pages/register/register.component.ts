import { Component } from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";
import {Router} from "@angular/router";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email = new FormControl('');
  phone = new FormControl('');
  password = new FormControl('');
  repassword = new FormControl('');

  constructor(private router: Router, private authService: AuthService) { }

  register() {
    if (this.email.value != null && this.password.value != null) {
      if (this.password.value === this.repassword.value) {
        this.authService.register(this.email.value, this.password.value).then(cred => {
          console.log(cred);
        }).catch(err => {
          console.log(err);
        })
      } else {
        console.log('nem egyezik a jelszó');
      }
    }
  }
}
