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
import { AlertsFormaPagoComponent } from './Alerts/alerts-forma-pago/alerts-forma-pago.component';
import { IdaYVueltaComponent } from './modulo_vuelos/ida-y-vuelta/ida-y-vuelta.component'; 
import { SoloIdaComponent } from './modulo_vuelos/solo-ida/solo-ida.component';
import { MultidestinoComponent } from './modulo_vuelos/multidestino/multidestino.component';
import { TablaBackEndComponent } from './modulo_vuelos/tabla-back-end/tabla-back-end.component';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BodyComponent } from './modulo-packagestrip/body/body.component';
import { CarouselComponent } from './modulo-packagestrip/carousel/carousel.component';
import { ReservaComponent } from './modulo-packagestrip/reserva/reserva.component';


import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FooterComponent } from './footer/footer.component';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSortModule } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './services/auth.services';
import { DatosComponent } from './modulo-packagestrip/datos/datos.component';
import { MatTableDataSource } from '@angular/material/table';

import { CarritoCompraComponent } from './carrito-compra/carrito-compra.component';
import { TicketsComponent } from './modulo_vuelos/tickets/tickets.component';

//import { FirstComponent } from './modulo-packagestrip/first/first.component';
//import { LoginComponent } from './modulo-packagestrip/login/login.component';
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
    IdaYVueltaComponent,
    SoloIdaComponent,
    MultidestinoComponent,
    TablaBackEndComponent,
    
    BodyComponent,
    CarouselComponent,
    ReservaComponent,
    FooterComponent,
    CarritoCompraComponent,
    DatosComponent,
    //FirstComponent,

    EncabezadoComponent,
    AlojamientoComponent,
    BodyComponent,
    CarouselComponent,
    FooterComponent,
    AlertsFormaPagoComponent,
    TicketsComponent,
    

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

    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatSortModule,
    MatGridListModule,
    MatMenuModule,
    MatTabsModule,
    FormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    

    DestinoComponent,
  ],
  providers: [SericiodebtninciosesionService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
