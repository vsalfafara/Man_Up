import { Injectable } from '@angular/core';
import { ServerService } from '../server.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor(
    private server: ServerService,
    private http: HttpClient
  ) { }

  getTitles() {
    return this.http.get(this.server.getEndpoint('specialist/title'))
  }

  getDiseases() {
    return this.http.get(this.server.getEndpoint('patient/diseases'))
  }
}
