import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  server: String = "http://localhost:3000/"

  constructor() { }

  getServer() {
    return this.server
  }

  getEndpoint(endpoint) {
    return this.server.concat(endpoint)
  }
}
