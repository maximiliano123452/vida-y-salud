import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage {

  email: string = '';
  password: string = '';

  constructor(private navCtrl: NavController, private alertController: AlertController) {}

  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }

  validarEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  login() {
    if (!this.email) {
      this.mostrarAlerta('El campo de correo no puede estar vacío.');
      return;
    }

    if (!this.validarEmail(this.email)) {
      this.mostrarAlerta('El formato del correo es inválido.');
      return;
    }

    if (!this.password) {
      this.mostrarAlerta('El campo de contraseña no puede estar vacío.');
      return;
    }

    if (this.password.length < 3 || this.password.length > 8) {
      this.mostrarAlerta('La contraseña debe tener entre 3 y 8 caracteres.');
      return;
    }

    this.navCtrl.navigateForward(['/home'], {
      queryParams: {
        email: this.email,
        password: this.password
      }
    });
  }

  registro() {
    this.navCtrl.navigateForward(['/registro']);
  }
}

