import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaVuelosComponent } from './busqueda-vuelos/busqueda-vuelos.component';
import { FormaDePagoComponent } from './forma-de-pago/forma-de-pago.component';
import { HeaderComponent } from './header/header.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { PersonasYClaseComponent } from './personas-y-clase/personas-y-clase.component';
import { LoginComponent } from './login/login.component';
import { SericiodebtninciosesionService } from './sericiodebtninciosesion.service';


import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { CrudComponent } from './crud/crud.component';
import {MatTableModule} from '@angular/material/table';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ListaVuelosComponent } from './lista-vuelos/lista-vuelos.component';


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
    CrudComponent,
    ListaVuelosComponent,
    

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
    MatSlideToggleModule
    
  ],
  providers: [SericiodebtninciosesionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
