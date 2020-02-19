import { Component, OnInit } from '@angular/core';
import { ServicioSuscripcionesService } from 'src/app/services/servicio-suscripciones.service';
import { Suscripcion } from 'src/app/modelo/Suscripcion';
import * as $ from 'jquery';

@Component({
  selector: 'app-lista-suscripciones',
  templateUrl: './lista-suscripciones.component.html',
  styleUrls: ['./lista-suscripciones.component.css']
})
export class ListaSuscripcionesComponent implements OnInit {

  public suscripciones: Suscripcion;
  public now = new Date();

  constructor(private servicioSuscripciones: ServicioSuscripcionesService) {
    $(document).ready(() => {
      this.recorreSuscripciones();
    });
  }

  ngOnInit() {
    this.servicioSuscripciones.getSuscripciones().subscribe(
      res => {
        this.suscripciones = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  // Recorre las suscripciones y pasa FechaExpira a calcularDias()
  recorreSuscripciones() {
    for (let i = 0; i < Object.keys(this.suscripciones).length; i++) {
      console.log(this.suscripciones[i]);
      this.calcularDias(this.suscripciones[i].expira);
    }
  }

  // Calcula los días entre la fecha actual y FechaExpira
  calcularDias(fecha) {
    const fechaSusc = new Date(fecha); // Hay que pasar el parámetro a Date
    const dias = (fechaSusc.getTime() - this.now.getTime()) / (1000 * 3600 * 24);
    console.log(Math.round(dias));
    this.calcularBarra(dias);
  }

  calcularBarra(dias) {
    const hoy = this.now.getDate();
    const porcentaje = (hoy * 100) / dias;
    $('#1').width(porcentaje + '%');
  }

}
