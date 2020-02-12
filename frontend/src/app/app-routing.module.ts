import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// componentes
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent} from './components/login/login.component';
import {RegistroComponent} from './components/registro/registro.component';
import { ListaSuscripcionesComponent } from './components/lista-suscripciones/lista-suscripciones.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: RegistroComponent // revisar porque esto es lo que cargue por defecto en el inicio, registro?
  },
  {
    path: 'suscripciones',
    component: ListaSuscripcionesComponent // revisar porque esto es lo que cargue por defecto en el inicio, registro?
  }
]; // SEGUIR AQUÍ

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
