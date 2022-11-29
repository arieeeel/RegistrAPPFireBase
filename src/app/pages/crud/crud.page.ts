import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../interfaces/interfaces';
import { BasedatosService } from 'src/app/services/basedatos.service';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.page.html',
  styleUrls: ['./crud.page.scss'],
})
export class CrudPage implements OnInit {

  usuarios: Usuarios[] = []

  constructor(public basedatosService: BasedatosService) { }

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios(){
    const enlace = 'Usuarios';
    this.basedatosService.getCollectionChanges<Usuarios>(enlace).subscribe( res =>{
      this.usuarios = res;
    });
  }

  EditUsuario(usuarios: Usuarios){
    console.log('da click en el item ->',usuarios);
    this.basedatosService.setUsuarios(usuarios);
  }

  async deleteUsuario(usuarios: Usuarios){
    const res = await this.basedatosService.deleteUsuarios<Usuarios>('Usuarios', usuarios.id).catch( res =>{
      console.log('error =>',res);
    });
    console.log('borrado con exito =>', res);
  }

}
