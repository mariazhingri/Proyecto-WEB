import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormaDePagoComponent } from 'src/app/forma-de-pago/forma-de-pago.component';

@Component({
  selector: 'app-lista-vuelos',
  templateUrl: './lista-vuelos.component.html',
  styleUrls: ['./lista-vuelos.component.css']
})
export class ListaVuelosComponent implements OnInit{

  constructor(private router: Router,private dialog:MatDialog) { }

  ngOnInit(): void{
  }
  /*-------------------------------VENTANA EMERGENTE DE FORMA DE PAGO---------------------------------------*/
  openDialogformadepagp(){
    this.dialog.open(FormaDePagoComponent)
  }


}
