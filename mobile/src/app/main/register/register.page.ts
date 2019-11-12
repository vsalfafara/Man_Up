import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../tools/auth/auth.service'
import { User } from '../tools/class/user/user'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  user = {
    email_address: "",
    full_name: "",
    mobile_number: "",
    password: "",
    password_confirm: "",
  }

  constructor(
    private router: Router,
    private auth: AuthService,
  ) { }

  register() {
    this.auth.register(this.user)
      .subscribe((data: User) => {
        console.log(data)
        this.login({ id: data._id, name: data.full_name });
      })
  }

  login(data) {
    this.auth.login({ email_address: this.user.email_address, password: this.user.password })
    this.router.navigate(['type', data])
  }
}
