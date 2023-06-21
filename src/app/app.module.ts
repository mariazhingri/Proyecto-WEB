import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaVuelosComponent } from './modulo_vuelos/busqueda-vuelos/busqueda-vuelos.component';
import { FormaDePagoComponent } from './forma-de-pago/forma-de-pago.component';
import { HeaderComponent } from './header/header.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { PersonasYClaseComponent } from './modulo_vuelos/personas-y-clase/personas-y-clase.component';
import { LoginComponent } from './login/login.component';
import { SericiodebtninciosesionService } from './sericiodebtninciosesion.service';
import { ListaVuelosComponent } from './modulo_vuelos/lista-vuelos/lista-vuelos.component';
import { EncabezadoComponent } from './modulo_alojamiento/encabezado/encabezado.component';
import { DestinoComponent } from './modulo_alojamiento/destino/destino.component';
import { AlojamientoComponent } from './modulo_alojamiento/alojamiento/alojamiento.component';


import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    BusquedaVuelosComponent,
    FormaDePagoComponent,
    LoginComponent,
    HeaderComponent,
    PaginaPrincipalComponent,
    PersonasYClaseComponent,
    ListaVuelosComponent,
    EncabezadoComponent,
    AlojamientoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule,
    MatToolbarModule,
    MatDialogModule,
    MatTableModule,
    MatSlideToggleModule,
    DestinoComponent
    
  ],
  providers: [SericiodebtninciosesionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
