import { Component } from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";
import {Router} from "@angular/router";
import {FormControl} from "@angular/forms";
import {User} from "../../shared/models/User";
import {UserService} from "../../shared/services/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email = new FormControl('');
  firstname = new FormControl('');
  lastname = new FormControl('');
  phone = new FormControl('');
  password = new FormControl('');
  repassword = new FormControl('');

  constructor(private router: Router, private authService: AuthService, private userService: UserService) { }

  register() {
    if (this.email.value != null && this.password.value != null && this.firstname.value != null
      && this.lastname.value != null && this.phone.value != null) {
      if (this.password.value === this.repassword.value) {
        this.authService.register(this.email.value, this.password.value).then(cred => {
          console.log(cred);

          const user: User = {
            id: cred.user?.uid as string,
            email: this.email.value as string,
            name: {
              firstname: this.firstname.value as string,
              lastname: this.lastname.value as string
            },
            phone: this.phone.value as string
          };

          this.userService.create(user).then(_ => {
            console.log("User added successfully.");
          }).catch(error => {
            console.log(error);
          });

        }).catch(err => {
          console.log(err);
        })
      } else {
        console.log('nem egyezik a jelszó');
      }
    }
  }
}
