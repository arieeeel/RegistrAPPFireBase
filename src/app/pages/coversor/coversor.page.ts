import { Component, OnInit } from '@angular/core';
import { GetapiService } from 'src/app/services/getapi.service';

@Component({
  selector: 'app-coversor',
  templateUrl: './coversor.page.html',
  styleUrls: ['./coversor.page.scss'],
})
export class CoversorPage implements OnInit {

  pageTitle = 'Conversor';

  listadoMindicador:any=[];
  


  constructor(private getapiService:GetapiService) {}

  ngOnInit() {
    this.cargar();
  }

  cargar(){ 

    this.getapiService.getPosts()
    .then(respuesta => {
      this.listadoMindicador = respuesta;
      console.log(respuesta);
    },
    (err) => {
      console.log(err);
    });

  }
}
