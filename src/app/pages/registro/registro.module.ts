import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { RegistroPage } from './registro.page';

@NgModule({
  declarations: [RegistroPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: RegistroPage }])
  ]
})
export class RegistroPageModule {}

