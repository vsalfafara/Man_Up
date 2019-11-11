import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerService } from '../tools/server.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  user = {}

  constructor(private http: HttpClient, private server: ServerService) { }

  ngOnInit() {
  }

  logForm() {
    this.http.post(this.server.getEndpoint('auth'), this.user)
      .subscribe((data) => {
        console.log(data)
      })
  }
}
