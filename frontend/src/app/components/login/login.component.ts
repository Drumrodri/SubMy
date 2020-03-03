
import { Component, OnInit } from '@angular/core';
import { ModeloUsuarioService} from 'src/app/services/servicio-usuario.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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


  constructor(private router: Router, private formBuilder: FormBuilder, private servicioLogin: ModeloUsuarioService) {

    this.formLogin = formBuilder.group({
      usuario:['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.([a-zA-Z]{2,4})+$/)]],
      pass: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_.+-]+$/)]]

    });

   }

  ngOnInit() {
    if(localStorage.getItem('tokenSubmy')){
      this.router.navigate(['suscripciones']);
    }
  }

  submit(){
    console.log('formulario');
    console.log(this.formLogin.value);
    this.servicioLogin.getLogin(this.formLogin.value).subscribe(

      res => {
        localStorage.setItem('tokenSubmy', res.token); // escribe el toquen en el localStorage
        this.router.navigate(['suscripciones']);
      },
      err => {
        console.log(err);
      }

    );

  }

  // validacion
   get usuario(){
     return this.formLogin.get('usuario');
   }

   get pass(){
     return this.formLogin.get('pass');
   }

}
