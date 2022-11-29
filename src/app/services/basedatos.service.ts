import { Usuario } from './../pages/interfaces/interfaces';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasedatosService {

  editUsuario: Usuario;

  constructor(public Firestore: AngularFirestore,) { }
  
createDocument<tipo>(data: tipo, enlace: string, id: string){
    const ref= this.Firestore.collection<tipo>(enlace);
    return ref.doc(id).set(data);

    }
createId(){
    return this.Firestore.createId();

  }
getCollectionChanges<tipo>(enlace:string): Observable<tipo[]>{
  const ref = this.Firestore.collection<tipo>(enlace)
  return ref.valueChanges();

}
setUsuarios(usuario: Usuario){
  this.editUsuario = usuario;
}
getUsuarios(){
  return this.editUsuario;
}
delete<tipo>(enlace: string, id: string){
  const ref= this.Firestore.collection<tipo>(enlace);
  return ref.doc(id).delete();
}
}