import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// componentes
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent} from './components/login/login.component';
import {RegistroComponent} from './components/registro/registro.component';
import { ListaSuscripcionesComponent } from './components/lista-suscripciones/lista-suscripciones.component';
import { GLoginUserGuard } from './services/g-login-user.guard'; // para cuando tengamos que poner parte privada
import { RegistroSuscripcionComponent } from './components/registro-suscripcion/registro-suscripcion.component';
import { PerfilComponent } from './components/perfil/perfil.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: RegistroComponent 
  },
  {
    path: 'suscripciones',
    component: ListaSuscripcionesComponent,
    canActivate:[GLoginUserGuard] 
  },
  {
    path: 'login',
    component: LoginComponent 
  },
  {
    path: 'crearSuscripcion',
    component: RegistroSuscripcionComponent,
    canActivate:[GLoginUserGuard]
  },
  {
    path: 'perfil',
    component: PerfilComponent,
    canActivate:[GLoginUserGuard]
  }
]; // SEGUIR AQUÍ

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
