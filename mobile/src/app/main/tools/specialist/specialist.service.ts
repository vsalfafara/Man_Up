import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerService } from '../server.service';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SpecialistService {

  constructor(
    private http: HttpClient,
    private server: ServerService,
    private auth: AuthService
  ) { }

  findSpecialist(title) {
    return this.http.get(this.server.getEndpoint(`specialist/title/${title}`))
  }
}
