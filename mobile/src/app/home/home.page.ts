import { Component, OnInit } from '@angular/core'
import { Geolocation } from '@ionic-native/geolocation/ngx'
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  map: GoogleMap

  constructor(private geolocation: Geolocation) { }

  async ngOnInit() {
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyDzA-gycSnxGvB1yopY2ziWjXI8GY9rzEY',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyDzA-gycSnxGvB1yopY2ziWjXI8GY9rzEY'
    })

    this.getLocation()
  }

  getLocation() {
    console.log('getting location...')

    this.geolocation.getCurrentPosition().then((resp) => {
    }).catch((error) => {
      console.log('Error getting location', error)
    })

    let watch = this.geolocation.watchPosition()
    watch.subscribe((data) => {
      this.loadMap(data.coords)
    })
  }

  loadMap({ latitude, longitude }) {
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: latitude,
          lng: longitude
        },
        zoom: 18,
        tilt: 30
      }
    }

    this.map = GoogleMaps.create('map', mapOptions)

    let marker: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: latitude,
        lng: longitude
      }
    })
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked')
    })
    marker.showInfoWindow()
  }
}
