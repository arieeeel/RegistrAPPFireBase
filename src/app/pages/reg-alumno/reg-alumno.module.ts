import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegAlumnoPageRoutingModule } from './reg-alumno-routing.module';

import { RegAlumnoPage } from './reg-alumno.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegAlumnoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RegAlumnoPage]
})
export class RegAlumnoPageModule {}
