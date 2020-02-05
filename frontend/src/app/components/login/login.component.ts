import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formuser: FormGroup;
  // aqui falta hacer modelo

  constructor(private formBuilder: FormBuilder) {

    this.formuser = formBuilder.group({
      

    });

   }

  ngOnInit() {
  }

}
