import { Router } from '@angular/router';
import { ToastController, LoadingController, } from '@ionic/angular';
import { AuthService } from './../../services/auth.service';
import { Usuario } from 'src/app/models/models';
import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  loading: HTMLIonLoadingElement;

  datos : Usuario = {
    uid:        null,
    nombre:      null,
    apellido:  null,
    rut:       null,
    genero:    null,
    edad:       null,
    email:     null,
    password:  null,
    direccion: null,
    telefono:     null,
    image:     null,
  }

  constructor(private auth: AuthService,
              private firestore: FirestoreService,
              private toastController: ToastController,
              private loadingController:LoadingController,
              private router: Router
    ) { }

  ngOnInit() {}

  async registrar(){
    this.cargarLoading('Registrando...')
    console.log('datos->', this.datos);
    const res = await this.auth.registrarUser(this.datos)

    if(res){
      console.log('usuario creado')
      const path = 'Usuarios';
      const id =res.user.uid
      this.datos.uid = id;
      this.datos.password = null;
      await this.firestore.createDoc(this.datos, path, id)
      this.presentToast('Registrado con exito')
      this.router.navigate(['/home'])
      
    }
    else{
      this.presentToast('Error')
    }
    
  }

  cargarLoading(message: string){
    
    this.presentLoading(message);

    setTimeout(() => {
      this.loading.dismiss();
    }, 1000);
  }

  async presentLoading(mensaje:string){
    this.loading = await this.loadingController.create({
    cssClass: 'my-custom-class',
    message: mensaje,
    duration: 2000
    });
    await this.loading.present();

  }
  async closeLoading(){
    await this.loading.dismiss();
  }
  
  async presentToast(mesagge:string){
    const toast = await this.toastController.create({
      message:mesagge,
      duration: 2000,
      icon : 'happy',
      color : "dark"
      
    });
    toast.present();
  }
}
