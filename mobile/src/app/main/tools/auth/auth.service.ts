import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerService } from '../server.service';
import { Token } from '../class/token/token'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private server: ServerService,
  ) { }

  login(user) {
    this.http.post(this.server.getEndpoint('auth'), user)
      .subscribe((data: Token) => {
        localStorage.setItem('user_id', data.id)
        localStorage.setItem('token', data.access_token)
      })
  }

  getId() {
    return localStorage.getItem('user_id')
  }

  setType(type) {
    localStorage.setItem('type', type)
  }

  getType() {
    return localStorage.getItem('type')
  }

  checkToken() {
    return localStorage.getItem('token')
  }

  checkType() {
    return localStorage.getItem('type')
  }

  register(user) {
    return this.http.post(this.server.getEndpoint('user'), user)
  }

  newPatient(patient) {
    return this.http.post(this.server.getEndpoint('patient'), patient)
  }

  newSpecialist(specialist) {
    return this.http.post(this.server.getEndpoint('specialist'), specialist)
  }
}
