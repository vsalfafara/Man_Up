import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AssetService } from '../../../tools/asset/asset.service'
import { ActivatedRoute, Router } from '@angular/router'
import { AuthService } from 'src/app/main/tools/auth/auth.service';
import { Specialist } from 'src/app/main/tools/class/specialist/specialist';

@Component({
  selector: 'app-specialist',
  templateUrl: './specialist.page.html',
  styleUrls: ['./specialist.page.scss'],
})
export class SpecialistPage implements OnInit {
  specialist = {
    title: "",
    fee: 0,
    user_id: ""
  }

  titles

  constructor(
    private assets: AssetService,
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.specialist.user_id = params.id
      console.log(this.specialist)
    })
    this.assets.getTitles()
      .subscribe(data => this.titles = data)
  }

  submit() {
    this.auth.newSpecialist(this.specialist)
      .subscribe((data: Specialist) => {
        console.log(data)
        this.auth.setType('specialist')
        this.router.navigateByUrl('/home')
      })
  }
}
