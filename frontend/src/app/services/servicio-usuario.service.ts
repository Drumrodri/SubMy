import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../modelo/Usuario';

@Injectable({
  providedIn: 'root'
})
export class ModeloUsuarioService {

  constructor(private http: HttpClient) { } 
 // crear usuarios
  saveUsuario(usuario: Usuario): Observable<any>{
    console.log('usuario desde el servicio-usuario.service.ts');
    console.log(usuario);
    return this.http.post('http://localhost:3000/crearUser', usuario);

  }

// obtener el login
  getLogin(usuario: Usuario): Observable<any> {
    return this.http.post('http://localhost:3000/login', usuario);
  }

  getToken(){
    return localStorage.getItem('tokenSubmy');
  }

  getUsuario(idUser: string): Observable<any> {
    return this.http.get('http://localhost:3000/usuarios/'+idUser);
  }
 
  logIn(){
    // !! es como un doble if, si hay item me devuelves true y si no false
    return !!localStorage.getItem('tokenSubmy');
  }
  
  logOut(){
    localStorage.removeItem('tokenSubmy');
  }

}
