import { Component, OnInit } from '@angular/core';
import { ServicioSuscripcionesService } from 'src/app/services/servicio-suscripciones.service';
import { Suscripcion } from 'src/app/modelo/Suscripcion';

@Component({
  selector: 'app-lista-suscripciones',
  templateUrl: './lista-suscripciones.component.html',
  styleUrls: ['./lista-suscripciones.component.css']
})
export class ListaSuscripcionesComponent implements OnInit {

  public suscripciones: Suscripcion;

  constructor(private servicioSuscripciones: ServicioSuscripcionesService) { }

  ngOnInit() {
    this.servicioSuscripciones.getSuscripciones().subscribe(
      res => {
        this.suscripciones = res;
        this.prueba();
      },
      err => {
        console.log(err);
      }
    ); 
  }

  prueba() {
    //$('.barraCarga')
  }
}
