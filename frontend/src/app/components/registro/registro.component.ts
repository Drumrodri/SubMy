import { Component, OnInit } from '@angular/core';
import { ModeloUsuarioService } from 'src/app/services/servicio-usuario.service';


import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { Usuario } from 'src/app/modelo/Usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public formregistro: FormGroup;
  public usuarios: Usuario;

  constructor(private formBuilder: FormBuilder, private mimodeloUsuario: ModeloUsuarioService) {

    // variables para los datos del formulario, se tiene que llamar igual que los formcontroller name
    this.formregistro = formBuilder.group({
      nick: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      imagen: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
     // repitepassword: ['', [Validators.required]] // revisar

    });

  }

  ngOnInit() {

  }

  submit() {
    console.log('usuario creado');
    console.log(this.formregistro);
    this.mimodeloUsuario.saveUsuario(this.formregistro.value).subscribe(
      res => {
        console.log('res de registro.comopontents');
        console.log(res);
        
      },
      err => {
        console.log('err de registro.comopontents');
        console.log(err);
      }


    );

  }


}
