
import { Component, OnInit } from '@angular/core';
import { ModeloUsuarioService } from 'src/app/services/servicio-usuario.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/modelo/Usuario';
import { Router } from '@angular/router';

import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formLogin: FormGroup;
  public formSocial: FormGroup;
  public misUsuarios: Usuario;
  // login google variables
  public user: SocialUser;
  private loggedIn: boolean;


  constructor(private router: Router, private formBuilder: FormBuilder, private servicioLogin: ModeloUsuarioService, private authService: AuthService) {

    this.formLogin = formBuilder.group({
      usuario: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_.+-ñÑ]+@[a-zA-Z0-9-]+\.([a-zA-Z]{2,4})+$/)]],
      pass: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_.+-]+$/)]]

    });

    this.formSocial = formBuilder.group({
      usuG: ['']
    });



  }

  ngOnInit() {
    if (localStorage.getItem('tokenSubmy')) {
      this.router.navigate(['suscripciones']);
    }

  }

  // login con redes sociales
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    // login google
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log('usuario google');
      console.log(this.user);
      this.loggedIn = (user != null);
      if (this.user != null) {
        this.servicioLogin.getLoginSocial(this.user.email).subscribe(

          res => {
            console.log(res);
            localStorage.setItem('tokenSubmy', res.token); // escribe el toquen en el localStorage
            this.router.navigate(['suscripciones']);
          },
          err => {
            console.log(err);
          }

        );

      }


    });

  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);

    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log('usuario facebook');
      console.log(this.user);
      this.loggedIn = (user != null);
      if (this.user != null) {
        this.servicioLogin.getLoginSocial(this.user.email).subscribe(

          res => {
            console.log(res);
            localStorage.setItem('tokenSubmy', res.token); // escribe el toquen en el localStorage
            this.router.navigate(['suscripciones']);
          },
          err => {
            console.log(err);
          }

        );

      }


    });

  }

  signOut(): void {
    this.authService.signOut();
  }


  submit() {
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
  get usuario() {
    return this.formLogin.get('usuario');
  }

  get pass() {
    return this.formLogin.get('pass');
  }

}
