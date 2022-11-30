import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/interfaces';
import { BasedatosService } from 'src/app/services/basedatos.service';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.page.html',
  styleUrls: ['./crud.page.scss'],
})
export class CrudPage implements OnInit {

  pageTitle = 'Crud';
  usuario: Usuario[] = []

  constructor(public basedatosService: BasedatosService) { }

  

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios(){
    const enlace = 'Usuarios';
    this.basedatosService.getCollectionChanges<Usuario>(enlace).subscribe( res =>{
      this.usuario = res;
    });
  }

  EditUsuario(usuarios: Usuario){
    console.log('da click en el item ->',usuarios);
    this.basedatosService.setUsuarios(usuarios);
  }

  async deleteUsuario(usuario: Usuario){
    const res = await this.basedatosService.delete<Usuario>('Usuarios', usuario.id).catch( res =>{
      console.log('error =>',res);
    });
    console.log('borrado con exito =>', res);
  }

}
