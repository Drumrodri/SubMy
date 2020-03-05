import { Component, OnInit } from '@angular/core';
import { ServicioServiciosService } from 'src/app/services/servicio-servicios.service';
import { Servicio } from 'src/app/modelo/Servicio';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServicioSuscripcionesService } from 'src/app/services/servicio-suscripciones.service';

@Component({
  selector: 'app-registro-suscripcion',
  templateUrl: './registro-suscripcion.component.html',
  styleUrls: ['./registro-suscripcion.component.css']
})
export class RegistroSuscripcionComponent implements OnInit {

  public servicios: Servicio;
  public formCrearSusc: FormGroup;
  public tarifa: number;

  constructor(private formBuilder: FormBuilder, private servicioServicios: ServicioServiciosService, private servicioSuscripciones: ServicioSuscripcionesService) { 
    this.formCrearSusc = this.formBuilder.group({
      idServicio: [''],
      fechaAlta: [''],
      periodo: [''],
      prueba: ['']
    });
  }

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

  submit() {
    let expira = this.addDays(this.formCrearSusc.value.fechaAlta);
    this.servicioSuscripciones.saveSuscripcion(this.formCrearSusc.value, expira, this.tarifa).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  addDays(date) {
    const result = new Date(date);

    switch (this.formCrearSusc.value.periodo) {
      case 'mensual':
        result.setDate(result.getDate() + 30);
        break;
      case "anual":
        result.setDate(result.getDate() + 365);
        break;
      case "trimestral":
        result.setDate(result.getDate() + 90);
        break;
      default:
        break;
    }

    const anio: number = result.getFullYear();
    const mes: number = result.getMonth()+1;
    const dia: number = result.getDate();

    const fecha = anio + "-" + mes + "-" + dia;

    return fecha;
  }

  setTarifa(tarifa: number) {
    this.tarifa = tarifa;
  }

}
