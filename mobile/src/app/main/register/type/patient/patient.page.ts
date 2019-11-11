import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerService } from '../../../tools/server.service'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-patient',
  templateUrl: './patient.page.html',
  styleUrls: ['./patient.page.scss'],
})
export class PatientPage implements OnInit {

  medical_history = {
    historical_data: {
      hereditary_diseases: {
        asthma: false,
        cancer: false,
        diabetes: false,
        high_blood_pressure: false,
        low_blood_pressure: false
      },
      intake: String,
      others: String
    },
    user_id: String
  }

  constructor(
    private http: HttpClient,
    private server: ServerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.medical_history.user_id = params.id
      console.log(this.medical_history)
    })
  }

  submit() {
    console.log(this.medical_history)
    this.http.post(this.server.getEndpoint('patient'), this.medical_history)
      .subscribe(data => {
        console.log(data)
        this.router.navigateByUrl('/home')
      })
  }
}
