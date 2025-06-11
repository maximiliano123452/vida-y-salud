import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {}

  // Método para mostrar alerta de error
  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Atención',
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }

  // Validación de formato de correo electrónico
  validarEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  onLogin() {
    if (!this.email) {
      this.mostrarAlerta('Por favor ingresa tu correo electrónico.');
      return;
    }

    if (!this.validarEmail(this.email)) {
      this.mostrarAlerta('El formato del correo es inválido.');
      return;
    }

    if (!this.password) {
      this.mostrarAlerta('Por favor ingresa tu contraseña.');
      return;
    }

    if (this.password.length < 3 || this.password.length > 8) {
      this.mostrarAlerta('La contraseña debe tener entre 3 y 8 caracteres.');
      return;
    }

    // Si todo está bien, navegamos a la página Home con los parámetros
    this.router.navigate(['/home'], {
      queryParams: {
        email: this.email,
        password: this.password
      }
    });
  }

  // Redirección al registro
  registro() {
    this.router.navigate(['/registro']);
  }
}


