import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegAlumnoPage } from './reg-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: RegAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegAlumnoPageRoutingModule {}
