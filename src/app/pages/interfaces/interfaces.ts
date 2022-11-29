import { Options } from "selenium-webdriver";

export interface Componente {
    icon: string;
    name: string;
    redirectTo: string;
}

export interface Usuarios {
    nombre: string;
    apellido: string;
    genero: string;
    email: string;
    edad: number;
    rut: string;
    direccion: string;
    telefono: number;
    fechaNacimiento: Date;
    imagen: string;
    id: string;

}