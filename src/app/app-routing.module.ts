import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormaDePagoComponent } from './forma-de-pago/forma-de-pago.component';
import { LoginComponent } from './login/login.component';
import { PaginaPrincipalComponent } from './modulo_vuelos/pagina-principal/pagina-principal.component';
import { PersonasYClaseComponent } from './modulo_vuelos/personas-y-clase/personas-y-clase.component';
import { BusquedaVuelosComponent } from './modulo_vuelos/busqueda-vuelos/busqueda-vuelos.component';
import { HeaderComponent } from './header/header.component';
import { ListaVuelosComponent } from './modulo_vuelos/lista-vuelos/lista-vuelos.component';
import { BodyComponent } from './modulo-packagestrip/body/body.component';
import { CarouselComponent } from './modulo-packagestrip/carousel/carousel.component';
import { ReservaComponent } from './modulo-packagestrip/reserva/reserva.component';
//import { LoginComponent } from './modulo-packagestrip/login/login.component';
//import { HeaderComponent } from './modulo-packagestrip/header/header.component';
//import { FirstComponent } from './modulo-packagestrip/first/first.component';





const routes: Routes = [
  {path: '',component: PaginaPrincipalComponent},
  { path: 'FormaDePagoComponent', component: FormaDePagoComponent },
  { path: 'LoginComponent', component: LoginComponent },
  { path: 'PaginaPrincipalComponent', component: PaginaPrincipalComponent },
  { path: 'PersonasYClaseComponent', component: PersonasYClaseComponent },
  { path: 'BusquedaVuelosComponent', component: BusquedaVuelosComponent },
  { path: 'HeaderComponent', component: HeaderComponent },
  { path: 'ListaVuelosComponent', component: ListaVuelosComponent },
  { path: 'BodyComponent', component: BodyComponent },
  { path: 'CarouselComponent', component: CarouselComponent },
  { path: 'ReservaComponent', component: ReservaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
