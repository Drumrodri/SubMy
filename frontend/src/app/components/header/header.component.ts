import { Component, OnInit } from '@angular/core';
import { ModeloUsuarioService } from 'src/app/services/servicio-usuario.service';
import { AuthService } from "angularx-social-login";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private servicioUsuario: ModeloUsuarioService, private authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.servicioUsuario.logOut();
  }
}
