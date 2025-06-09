import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage {
  email: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.email = params['email'] || '';
    });
  }
}
