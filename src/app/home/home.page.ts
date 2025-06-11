import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {

  email: string = '';
  password: string = '';
  bienvenidos: string = 'Bienvenid@';

  constructor(
    private route: ActivatedRoute,
    private menu: MenuController
  ) {}

  ngOnInit(): void {
    this.menu.close("mainMenu");

    this.route.queryParams.subscribe(params => {
      this.email = params['email'] || '';
      this.password = params['password'] || '';
    });
  }
}

