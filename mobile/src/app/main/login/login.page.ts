import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  user = {}

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  logForm() {
    console.log(this.user)
    this.http.post('http://localhost:3000/auth', this.user)
      .subscribe((data) => {
        console.log(data)
      })
  }
}
