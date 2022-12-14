import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { RegisterComponent } from '../app/components/register/register.component';
import { LoginComponent} from '../app/components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ModalComponent } from './components/modal/modal.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent,RegisterComponent,LoginComponent,PerfilComponent,ModalComponent,],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,ComponentsModule,FormsModule,ReactiveFormsModule,HttpClientModule,AngularFirestoreModule,AngularFireAuthModule,AngularFireModule.initializeApp(environment.firebaseConfig),
  
  provideFirebaseApp(()=>initializeApp(environment.firebaseConfig)),
  provideFirestore(()=>getFirestore()),
  provideAuth(()=>getAuth())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {}
