import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, deleteDoc, updateDoc} from '@angular/fire/firestore';
import { Usuario } from './../models/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioservService {

  constructor(private firestore: Firestore) { }

  getUsuarios(): Observable<Usuario[]> {
    const usuariosRef = collection(this.firestore,'Usuarios');
    return collectionData(usuariosRef, {idField: 'uid'}) as Observable<Usuario[]>;
  }

  getUsuarioById(id:string): Observable<Usuario>{
    const usuariosRef = doc(this.firestore,`Usuarios/${id}`);
    return docData(usuariosRef,{ idField: 'uid'}) as Observable<Usuario>;
  }

  addUsuario(usuario: Usuario){
    const usuariosRef = collection(this.firestore, 'Usuarios');
    return addDoc(usuariosRef,usuario);
  }

  updateUsuario(usuario: Usuario){
    const usuariosRef = doc(this.firestore,`Usuarios/${usuario.uid}`);
    return updateDoc(usuariosRef, 
      { 
        nombre: usuario.nombre, 
        apellido: usuario.apellido,
        rut: usuario.rut,
        edad: usuario.edad,  
        genero: usuario.genero,
        direccion: usuario.direccion,
        telefono: usuario.telefono,
        email: usuario.email,
        password: usuario.password,
        image: usuario.image
      });
  }

  deleteUsuario(usuario: Usuario){
    const usuariosRef = doc(this.firestore,`Usuarios/${usuario.uid}`);
    return deleteDoc(usuariosRef);
  }



}
