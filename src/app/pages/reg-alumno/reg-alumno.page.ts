import { Component, OnInit, Input } from '@angular/core';
import { BasedatosService } from 'src/app/services/basedatos.service';
import { Usuarios } from '../interfaces/interfaces';
import { ToastController, LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-reg-alumno',
  templateUrl: './reg-alumno.page.html',
  styleUrls: ['./reg-alumno.page.scss'],
})
export class RegAlumnoPage implements OnInit {

  pageTitle= 'Registro';

  newUsuarios: Usuarios = {
    nombre: '',
    apellido: '',
    genero: '',
    email: '',
    edad: null,
    rut: '',
    direccion: '',
    telefono: null,
    fechaNacimiento: null,
    imagen: '',
    id: '',
  };

  loading: any;

  constructor(public database: BasedatosService,
    public toastController: ToastController,
    public loadingController: LoadingController,) { }

  ngOnInit() {
    const usuarios = this.database.getUsuarios();
    console.log('el Alumno a editar es ->', usuarios);
    if (usuarios !== undefined) {
      this.newUsuarios = usuarios;
    }
  }
  async save() {
    this.presentLoading();
    console.log('Esto se guardara ->', this.newUsuarios);
    const data = this.newUsuarios;
    if (data.id == '') {
      data.id = this.database.createId();
    }
    const enlace = 'Usuarios'
    await this.database.createDocument<Usuarios>(data, enlace, data.id).then((_) => {
      this.presentToast('Guardado con Exito', 2000)
      this.loading.dismiss();
      this.newUsuarios = {
        nombre: '',
        apellido: '',
        genero: '',
        email: '',
        edad: null,
        rut: '',
        direccion: '',
        telefono: null,
        fechaNacimiento: null,
        imagen: '',
        id: '',
      };
    });
  }

  async presentToast(mensaje: string, tiempo: number) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: tiempo,
    });
    toast.present();

  }
  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'guardando',

    });
    await this.loading.present();
  }
}
