import { Component, OnInit } from '@angular/core';
import { ModeloUsuarioService } from 'src/app/services/servicio-usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private servicioUsuario: ModeloUsuarioService) { }

  ngOnInit() {
  }

  logout() {
    this.servicioUsuario.logOut();
  }
}
