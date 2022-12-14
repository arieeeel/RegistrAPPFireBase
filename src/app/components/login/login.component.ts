import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  credenciales = {
    email: null,
    password : null
  }
  loading: HTMLIonLoadingElement;
  constructor(private auth: AuthService,
              private alertCtrl: AlertController,
              private loadingController:LoadingController,
              private router: Router,
              private toastController: ToastController,
    
) { }

  ngOnInit() {
  }

  async login(){
    console.log('credenciales ->', this.credenciales);
    const res = await this.auth.login(this.credenciales.email, this.credenciales.password)
    if(res){
      console.log('res-> ', res);
      this.router.navigateByUrl('/home',{replaceUrl:true});
      this.presentToast('Ingresado con exito');
      this.router.navigate(['/home'])
    }
    else{
      this.presentToast('usuario o contraseña invalida');
    }
  }

  async presentToast(mensaje: string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      icon : 'happy',
      color : "dark"
    });
    toast.present();
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
}
