import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { environment } from 'src/environments/environment';
import { Geolocation } from '@capacitor/geolocation';


const api_url = environment.api_url;
const api_key = environment.api_key;


@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage{

  pageTitle = 'Clima';
  weatherT:any
  fechaHoy = new Date()
  nombreCiudad : any
  weatherIcon : any
  DetallesTiempo : any
  location : any
  latitude : number
  longitude : number
  

  constructor(private httpClient:HttpClient) {
    this.cargarDatos()
    
  }

  async cargarDatos(){
    const location = await Geolocation.getCurrentPosition();
    this.latitude = location.coords.latitude;
    this.longitude = location.coords.longitude;
    this.httpClient.get(`${api_url}/weather?lat=${this.latitude}&lon=${this.longitude}&appid=${api_key}`)
    .subscribe(respuesta =>{
      console.log(respuesta);
      this.weatherT = respuesta['main']
      this.nombreCiudad = respuesta['name']
      console.log(this.weatherT);
      this.DetallesTiempo = respuesta['weather'][0]
      console.log(this.DetallesTiempo);
      this.weatherIcon = `http://openweathermap.org/img/wn/${this.DetallesTiempo.icon}@2x.png`
      this.location = respuesta['coord']
      console.log(this.location);
      
    })
  }
}
