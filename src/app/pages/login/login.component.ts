import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../shared/services/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = new FormControl('');
  password = new FormControl('');
  constructor(private router: Router, private authService: AuthService, private snackBar: MatSnackBar) {}

  login() {
    if (this.email.value != null && this.password.value != null){
      this.authService.login(this.email.value, this.password.value).then(cred => {
        console.log(cred);
        this.router.navigateByUrl("/main");
      }).catch(err => {
        this.snackBar.open("Hibás jelszó vagy email", "Bezár", {duration: 3000});
        console.log(err)
      })
    }
  }
}
