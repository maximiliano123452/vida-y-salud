import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false
})
export class RegistroPage {

  constructor(private navCtrl: NavController) {}

  volverLogin() {
    this.navCtrl.navigateBack(['/login']);
  }
}

