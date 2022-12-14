import { Component, OnInit, VERSION } from '@angular/core';
import {NgxQrcodeElementTypes,NgxQrcodeErrorCorrectionLevels,} from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  pageTitle = 'generar QR';

  name = 'Angular ' + VERSION.major;
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = '';

  constructor() { }

  ngOnInit() {
  }


  generarqr(){
    let tiempoActual = Date.now();
    let hoy = new Date(tiempoActual);
    let hoyFormato = hoy.toLocaleDateString();
    let text = this.generarRandom(8);
    let textInput = hoyFormato + "/asistencia/" + text;
    console.log(textInput);
    this.value = textInput
  }

  generarRandom(num){
    let characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let res= '';
    let charactersLength = characters.length;
    for ( let i = 0; i < num; i++ ) {
        res += characters.charAt(Math.floor(Math.random() * charactersLength));

    }

    return res;
  }
}
