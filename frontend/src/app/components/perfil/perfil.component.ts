import { Component, OnInit } from '@angular/core';
import { ModeloUsuarioService } from 'src/app/services/servicio-usuario.service';
import { Usuario } from 'src/app/modelo/Usuario';
import * as decode from 'jwt-decode';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public user: Usuario;
  public imagen: string;

  constructor(private servicioUsuario: ModeloUsuarioService) { }

  ngOnInit() {

    var token = localStorage.getItem('tokenSubmy');
    var tokenDecode = decode(token);

    this.servicioUsuario.getUsuario(tokenDecode.id).subscribe(
      res => {
        this.user = res;
        this.imagen = res[0].imagen;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

}
