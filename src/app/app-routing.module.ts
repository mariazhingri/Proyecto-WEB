import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormaDePagoComponent } from './forma-de-pago/forma-de-pago.component';
import { LoginComponent } from './login/login.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { PersonasYClaseComponent } from './modulo_vuelos/personas-y-clase/personas-y-clase.component';
import { BusquedaVuelosComponent } from './modulo_vuelos/busqueda-vuelos/busqueda-vuelos.component';
import { HeaderComponent } from './header/header.component';
import { ListaVuelosComponent } from './modulo_vuelos/lista-vuelos/lista-vuelos.component';

import { BodyComponent } from './modulo-packagestrip/body/body.component';
import { CarouselComponent } from './modulo-packagestrip/carousel/carousel.component';
import { ReservaComponent } from './modulo-packagestrip/reserva/reserva.component';
import { TablaBackEndComponent } from './modulo_vuelos/tabla-back-end/tabla-back-end.component';

//import { LoginComponent } from './modulo-packagestrip/login/login.component';
//import { HeaderComponent } from './modulo-packagestrip/header/header.component';
//import { FirstComponent } from './modulo-packagestrip/first/first.component';


import { EncabezadoComponent } from './modulo_alojamiento/encabezado/encabezado.component';
import { AlojamientoComponent } from './modulo_alojamiento/alojamiento/alojamiento.component';
import { CarritoCompraComponent } from './carrito-compra/carrito-compra.component';
import { TablaPComponent } from './modulo_vuelos/tabla-p/tabla-p.component';


const routes: Routes = [
  {path: '',component: PaginaPrincipalComponent},
  { path: 'FormaDePagoComponent', component: FormaDePagoComponent },
  { path: 'LoginComponent', component: LoginComponent },
  { path: 'PaginaPrincipalComponent', component: PaginaPrincipalComponent },
  { path: 'PersonasYClaseComponent', component: PersonasYClaseComponent },
  { path: 'BusquedaVuelosComponent', component: BusquedaVuelosComponent },
  { path: 'HeaderComponent', component: HeaderComponent },
  { path: 'ListaVuelosComponent', component: ListaVuelosComponent },
  { path: 'TablaBackEndComponent', component: TablaBackEndComponent },
  { path: 'TablaPComponent', component: TablaPComponent },

  { path: 'BodyComponent', component: BodyComponent },
  { path: 'CarouselComponent', component: CarouselComponent },
  { path: 'ReservaComponent', component: ReservaComponent },
  { path: 'CarritoCompraComponent', component: CarritoCompraComponent },

  { path: 'EncabezadoComponent', component: EncabezadoComponent },
  { path: 'AlojamientoComponent', component: AlojamientoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
