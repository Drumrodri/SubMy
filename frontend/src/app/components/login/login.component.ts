
import { Component, OnInit } from '@angular/core';
import { ServicioLoginService} from 'src/app/services/servicio-login.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Usuario } from 'src/app/modelo/Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formLogin: FormGroup;
  public misUsuarios: Usuario;


  constructor(private router: Router, private formBuilder: FormBuilder, private servicioLogin: ServicioLoginService) {

    this.formLogin = formBuilder.group({
      usuario:[''],
      pass: ['']

    });

   }

  ngOnInit() {
  }

  submit(){
    console.log('formulario');
    console.log(this.formLogin.value);
    this.servicioLogin.getLogin(this.formLogin.value).subscribe(

      res => {
        localStorage.setItem('token', res); // escribe el toquen en el localStorage
        // falta hacer lo de parte privada
      },
      err => {
        console.log(err);
      }

    );

  }

}
