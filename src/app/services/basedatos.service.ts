import { Usuarios } from './../pages/interfaces/interfaces';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasedatosService {

  editUsuarios: Usuarios;

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
setUsuarios(usuarios: Usuarios){
  this.editUsuarios = usuarios;
}
getUsuarios(){
  return this.editUsuarios;
}
deleteUsuarios<tipo>(enlace: string, id: string){
  const ref= this.Firestore.collection<tipo>(enlace);
  return ref.doc(id).delete();
}
}