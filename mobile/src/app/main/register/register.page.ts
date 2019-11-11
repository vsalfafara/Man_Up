import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerService } from '../tools/server.service'
import { Router } from '@angular/router';
import { User } from '../tools/class/user'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user = {
    email_address: "",
    full_name: "",
    mobile_number: "",
    password: "",
    password_confirm: ""
  }

  constructor(
    private http: HttpClient,
    private server: ServerService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  register() {
    this.http.post(this.server.getEndpoint('user'), this.user)
      .subscribe((data: User) => this.router.navigate(['type', { id: data._id, name: data.full_name }]))
  }
}
