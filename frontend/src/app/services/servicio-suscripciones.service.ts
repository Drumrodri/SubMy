import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Suscripcion } from '../modelo/Suscripcion';
import * as decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class ServicioSuscripcionesService {

  private decodedToken = decode(localStorage.getItem('tokenSubmy'));

  constructor(private http: HttpClient) { }

  getSuscripciones(idUser: string): Observable<any> {
    return this.http.get('http://localhost:3000/suscripciones/'+idUser);
  }

  saveSuscripcion(suscripcion: Suscripcion, expira: string, tarifa: number): Observable<any> {
    suscripcion.usuario_id = this.decodedToken.id;
    suscripcion.estado = "vigente";
    suscripcion.expira = expira;
    suscripcion.precio = tarifa;
    console.log(suscripcion);
    return this.http.post('http://localhost:3000/suscripciones/crear', suscripcion);
  }
}
