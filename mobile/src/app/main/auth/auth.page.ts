import { Component, OnInit } from '@angular/core';
import { AuthService } from '../tools/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  user = {}

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submit() {
    this.auth.login(this.user)
    this.router.navigate(['home'])
  }
}
