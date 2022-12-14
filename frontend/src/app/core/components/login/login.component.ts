import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private router: Router,
  ) {}

  userForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });


  login() {
    const username = this.userForm.value.username;
    const password = this.userForm.value.password;
    console.log(username, password);
    if (username == "admin" && password == "123") {
      this.router.navigateByUrl("/livros");
    }
  }

}
