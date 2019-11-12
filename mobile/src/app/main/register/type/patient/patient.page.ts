import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { AuthService } from 'src/app/main/tools/auth/auth.service';
import { Patient } from 'src/app/main/tools/class/patient/patient';
import { AssetService } from 'src/app/main/tools/asset/asset.service';
import { Disease } from 'src/app/main/tools/class/disease/disease';
import * as lodash from 'lodash'

@Component({
  selector: 'app-patient',
  templateUrl: './patient.page.html',
  styleUrls: ['./patient.page.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class PatientPage implements OnInit {

  patient = {
    historical_data: {
      hereditary_diseases: {
        asthma: false,
        cancer: false,
        diabetes: false,
        high_bp: false,
        low_bp: false
      },
      intake: String,
      others: String
    },
    user_id: String
  }

  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.patient.user_id = params.id
      console.log(this.patient)
    })
  }

  submit() {
    this.auth.newPatient(this.patient)
      .subscribe((data: Patient) => {
        this.auth.setType('patient')
        this.router.navigateByUrl('/home')
      })
  }
}
