import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { SplashComponent } from './splash/splash.component';
import { Usuario } from './models/models';
import { FirestoreService } from './services/firestore.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  login:boolean=false;

  constructor(private modalController: ModalController,
    public alertController: AlertController,
    public navCtrl: NavController,
    private firestore: FirestoreService,
    private auth: AuthService,
    private router: Router,) {
    this.presentSplash();
  }
  
  async presentSplash(){
    const modal = await this.modalController.create({
      component: SplashComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async salir(){
    const alert = await this.alertController.create({
      header: 'Salir',
      message: 'Quieres salir?',
      buttons: [
        {
          text: 'No',
          handler: () => {

          }
        },{
          text: 'Si',
          handler: () =>{
            this.navCtrl.navigateRoot('login');
          }
        }
      ]
    });

    await alert.present();
  
  }

}
