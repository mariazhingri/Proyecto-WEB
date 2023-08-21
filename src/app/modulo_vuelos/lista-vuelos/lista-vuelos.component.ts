import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormaDePagoComponent } from 'src/app/forma-de-pago/forma-de-pago.component';
import { BusquedaYListaService } from '../servicios/busqueda-y-lista.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lista-vuelos',
  templateUrl: './lista-vuelos.component.html',
  styleUrls: ['./lista-vuelos.component.css']
})
export class ListaVuelosComponent implements OnInit{

  ComponenteListaVuelos: boolean = false;
  constructor(private router: Router,private dialog:MatDialog, private BusquedaYListaService: BusquedaYListaService) { }

  ngOnInit(): void{
  }
  /*-------------------------------VENTANA EMERGENTE DE FORMA DE PAGO---------------------------------------*/
  openDialogformadepagp(){
    this.dialog.open(FormaDePagoComponent)
  }
/*--------------------------------------------*/


}
