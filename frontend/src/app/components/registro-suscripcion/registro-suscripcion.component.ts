import { Component, OnInit } from '@angular/core';
import { ServicioServiciosService } from 'src/app/services/servicio-servicios.service';
import { Servicio } from 'src/app/modelo/Servicio';

@Component({
  selector: 'app-registro-suscripcion',
  templateUrl: './registro-suscripcion.component.html',
  styleUrls: ['./registro-suscripcion.component.css']
})
export class RegistroSuscripcionComponent implements OnInit {

  public servicios: Servicio;

  constructor(private servicioServicios: ServicioServiciosService) { }

  ngOnInit() {
    this.servicioServicios.getServicios().subscribe(
      res => {
        this.servicios = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

}
