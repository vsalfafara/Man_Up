import { Component, OnInit } from '@angular/core'
import { Geolocation } from '@ionic-native/geolocation/ngx'
import { AuthService } from '../tools/auth/auth.service'
import { UserService } from '../tools/user/user.service'
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps'
import { SpecialistService } from '../tools/specialist/specialist.service'
import { Specialist } from '../tools/class/specialist/specialist'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  map: GoogleMap
  marker: Marker
  type
  specialistTitle
  specialists = [
    'Pediatrician',
    'Psychiatrist',
    'Therapist',
    'Podiatrist',
    'General Practitioner',
    'Endocrinologist',
    'Pulmonologist',
  ]

  constructor(
    private geolocation: Geolocation,
    private auth: AuthService,
    private user: UserService,
    private specialist: SpecialistService
  ) { }

  async ngOnInit() {
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyDzA-gycSnxGvB1yopY2ziWjXI8GY9rzEY',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyDzA-gycSnxGvB1yopY2ziWjXI8GY9rzEY'
    })

    this.type = this.auth.getType()
    console.log(this.auth.getType())
    this.getLocation()
  }

  checkType(type) {
    return this.type === type
  }

  getLocation() {
    console.log('getting location...')

    this.geolocation.getCurrentPosition().then((resp) => {
    }).catch((error) => {
      console.log('Error getting location', error)
    })

    let watch = this.geolocation.watchPosition()
    watch.subscribe((data) => {
      this.user.setCoords({
        latitude: data.coords.latitude,
        longitude: data.coords.longitude
      })
      this.loadMap(data.coords)
    })
  }

  loadMap({ latitude, longitude }) {
    let mapOptions: GoogleMapOptions = {
      controls: {
        zoom: false
      },
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

    this.marker = this.map.addMarkerSync({
      title: "You",
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: latitude,
        lng: longitude
      }
    })

    this.marker.showInfoWindow()
  }

  locateSpecialist({ full_name, coordinates }, { title, fee }, map: GoogleMap, marker: Marker) {
    console.log(map)
    let { latitude, longitude } = coordinates
    let body =
      `Name: <b>${full_name}</b><br>` +
      `Title: <b>${title}</b><br>` +
      `Fee: <b>${fee}</b><br>`
    marker = map.addMarkerSync({
      title: body,
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: latitude,
        lng: longitude
      }
    })

    marker.showInfoWindow()
  }

  findSpecialist() {
    console.log(this.specialistTitle)
    let specialist = this.specialistTitle
    let service = this.specialist
    let user = this.user
    let locateSpecialist = this.locateSpecialist
    let map = this.map
    let marker = this.marker

    let search = setInterval(function () {
      console.log(`searching for ${specialist}`)
      service.findSpecialist(specialist)
        .subscribe((data: Specialist) => {
          if (data.user_id) {
            user.getUser(data.user_id)
              .subscribe((user: any) => {
                console.log(user)
                locateSpecialist(user, data, map, marker)
              })
            clearInterval(search)
          }
        })
    }, 1000)
  }

  standby() {
    this.user.standby()
      .subscribe(data => console.log(data))
  }
}
