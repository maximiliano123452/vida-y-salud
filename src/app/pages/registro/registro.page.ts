import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false
})
export class RegistroPage {
  nombre: string = '';
  apellido: string = '';
  usuario: string = '';
  email: string = '';
  password: string = '';
  nivelEducacion: string = '';
  fechaNacimiento: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController,
    private menu: MenuController
  ) {}

  async presentAlert(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Atención',
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }

  onRegister() {
    if (
      !this.nombre.trim() ||
      !this.apellido.trim() ||
      !this.usuario.trim() ||
      !this.email.trim() ||
      !this.password.trim() ||
      !this.nivelEducacion ||
      !this.fechaNacimiento
    ) {
      this.presentAlert('Por favor completa todos los campos.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      this.presentAlert('El correo electrónico no es válido.');
      return;
    }

    if (this.password.length < 3 || this.password.length > 8) {
      this.presentAlert('La contraseña debe tener entre 3 y 8 caracteres.');
      return;
    }

    this.presentAlert('Registro exitoso');
    this.router.navigate(['/login']);
  }

  ionViewWillEnter() {
    this.menu.close('mainMenu');
  }
}



