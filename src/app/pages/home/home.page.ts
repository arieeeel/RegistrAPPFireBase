import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
  
  pageTitle = 'Inicio';

  constructor(private authService: AuthService,
    private LoadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private router: Router) {

    }

    logut(){
      this.authService.logout();
      this.router.navigateByUrl('/',{replaceUrl:true})
    }

    async toastPresent(message:string){
      const toast = await this.toastCtrl.create({
        message:message,
        duration:1000,
      });
      await toast.present();
    }

    async alertPresent(header:string,message:string){
      const alert = await this.alertCtrl.create({
        header:header,
        message:message,
        buttons:['OK']
      });
      await alert.present();
    }
}
