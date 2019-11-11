import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-type',
  templateUrl: './type.page.html',
  styleUrls: ['./type.page.scss'],
})
export class TypePage implements OnInit {
  user = {
    id: null,
    name: null
  }

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.user.id = params.id
      this.user.name = params.name
      console.log(this.user)
    })
  }

  type(type) {
    this.router.navigate([type, { id: this.user.id }])
  }
}
