import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { ModeloUsuarioService } from './servicio-usuario.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GLoginUserGuard implements CanActivate {
    
  constructor (private usuarioModel:ModeloUsuarioService, private router:Router ){

  }

  canActivate():boolean{
    if(this.usuarioModel.logIn()){
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }
  
}