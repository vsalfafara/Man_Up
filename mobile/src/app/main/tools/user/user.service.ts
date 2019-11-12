import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerService } from '../server.service';
import { AuthService } from '../auth/auth.service'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private server: ServerService,
    private auth: AuthService
  ) { }

  getUser(id) {
    return this.http.get(this.server.getEndpoint(`user/id/${id}`))
  }

  standby() {
    let body = {
      id: this.auth.getId()
    }
    return this.http.post(this.server.getEndpoint('specialist/standby'), body)
  }

  setCoords(coords) {
    let body = {
      id: this.auth.getId(),
      coords: coords
    }
    this.http.post(this.server.getEndpoint('user/coords'), body)
      .subscribe(data => console.log(data))
  }
}
