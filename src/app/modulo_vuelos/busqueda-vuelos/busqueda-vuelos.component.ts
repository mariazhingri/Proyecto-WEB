import { Component, OnInit,TemplateRef  } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { PersonasYClaseComponent } from '../personas-y-clase/personas-y-clase.component';
import { MatDialogRef } from '@angular/material/dialog';
import { ListaVuelosComponent } from '../lista-vuelos/lista-vuelos.component';
import { FormaDePagoComponent } from 'src/app/forma-de-pago/forma-de-pago.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BusquedaYListaService } from '../servicios/busqueda-y-lista.service';
import { Subscription } from 'rxjs';
<<<<<<< HEAD
import { TablaBackEndComponent } from '../tabla-back-end/tabla-back-end.component';
=======
>>>>>>> f62f93a70fe9b2aac573adbbb54e3964b723bc0b


@Component({
  selector: 'app-busqueda-vuelos',
  templateUrl: './busqueda-vuelos.component.html',
  styleUrls: ['./busqueda-vuelos.component.css']
})
export class BusquedaVuelosComponent implements OnInit{


  
  idayvuelta = true;
  soloida = false;
  multidestino = false;

  ComponenteListaVuelos: boolean = false;

  private subscription: Subscription;
  
  constructor(private router: Router,private dialog:MatDialog, private formBuilder: FormBuilder,
    private BusquedaYListaService: BusquedaYListaService) { 

      this.subscription = this.BusquedaYListaService.ComponenteListaVuelos$.subscribe(show => {
        this.ComponenteListaVuelos = show;
      });
    }

  abrirmultidestino(){
    this.BusquedaYListaService.enviarBotonClicado('Multidestino');
    this.multidestino=true;
    this.idayvuelta = false;
    this.soloida = false;
    this.BusquedaYListaService.toggleComponenteListaVuelos(false);
  }
  abrirsoloida(){
    this.BusquedaYListaService.enviarBotonClicado('Solo ida');
    this.multidestino=false;
    this.idayvuelta = false;
    this.soloida = true
    this.BusquedaYListaService.toggleComponenteListaVuelos(false);
  }
  abrirsidayvuelta(){
    this.BusquedaYListaService.enviarBotonClicado('Ida y vuelta');
    this.multidestino=false;
    this.idayvuelta=true;
    this.soloida = false;
    this.BusquedaYListaService.toggleComponenteListaVuelos(false);
  }

  

/*-------------------------------VENTANA EMERGENTE DE PERSONASYCLASE---------------------------------------*/
  openDialogpeersonayclase(){
    this.dialog.open(PersonasYClaseComponent)
  }





  /*-------------------------------BOTON BUSQUEDA ---> ABRIR COMPONENTE LISTA DE VUELOS---------------------------------------*/
  lista_vuelos = false;
  
  abrirlista_vuelos(){
    this.lista_vuelos = true;
  }
ngOnInit(): void{
  
}

<<<<<<< HEAD
  abrirtablabackend(){
    this.dialog.open(TablaBackEndComponent)
  }

=======


>>>>>>> f62f93a70fe9b2aac573adbbb54e3964b723bc0b
}


