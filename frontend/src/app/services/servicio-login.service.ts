import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../modelo/Usuario';

@Injectable({
  providedIn: 'root'
})
export class ServicioLoginService {

  constructor(private http: HttpClient) { } // poner private http: HttpClient

  getLogin(usuario: Usuario): Observable<any> {
    return this.http.post('http://localhost:3000/login', usuario);
  }

}
