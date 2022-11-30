import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { InteractionService } from '../../services/interaction.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  
})
export class LoginPage implements OnInit {

  pageTitle= 'Login';

  credenciales = {
    correo: null,
    password: null,
  }

  constructor(private auth: AuthService, 
              private interaction: InteractionService,
              private router: Router, ){}

  ngOnInit() {}
  
  async login() {
    await this.interaction.presentLoading('ingresando...')

    console.log('credenciales ->', this.credenciales); 
    const res = await this.auth.login(this.credenciales.correo, this.credenciales.password).catch(error =>{})
      console.log('error')
      this.interaction.closeLoading();
      this.interaction.presentToast('Usuario o Contraseña Invalida');


    if (res) {
      console.log('res ->', res);
      
      this.interaction.closeLoading();
      this.interaction.presentToast('Ingresado con Exito')
      this.router.navigate(['home'])
      this.credenciales = {
        correo: null,
        password: null,
      }
    }
  }

  async register() {
    await this.interaction.presentLoading('Registrando...')

    console.log('credenciales ->', this.credenciales); 
    const res = await this.auth.register(this.credenciales.correo, this.credenciales.password).catch(error =>{})
      console.log('error')
      this.interaction.closeLoading();
      this.interaction.presentToast('Usuario o Contraseña Invalida');


    if (res) {
      console.log('res ->', res);
      
      this.interaction.closeLoading();
      this.interaction.presentToast('Registrado con Exito')
      this.router.navigate(['home'])
      this.credenciales = {
        correo: null,
        password: null,
      }
      
    }
  }
}
