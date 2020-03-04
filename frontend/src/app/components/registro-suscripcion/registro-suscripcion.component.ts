import { Component, OnInit } from '@angular/core';
import { ServicioServiciosService } from 'src/app/services/servicio-servicios.service';
import { Servicio } from 'src/app/modelo/Servicio';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registro-suscripcion',
  templateUrl: './registro-suscripcion.component.html',
  styleUrls: ['./registro-suscripcion.component.css']
})
export class RegistroSuscripcionComponent implements OnInit {

  public servicios: Servicio;
  public formCrearSusc: FormGroup;

  constructor(private formBuilder: FormBuilder, private servicioServicios: ServicioServiciosService) { 
    this.formCrearSusc = this.formBuilder.group({
      servicio: [''],
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
    console.log(this.formCrearSusc.value);
  }

}
