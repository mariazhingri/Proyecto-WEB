import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { BusquedaYListaService } from '../servicios/busqueda-y-lista.service';

@Component({
  selector: 'app-personas-y-clase',
  templateUrl: './personas-y-clase.component.html',
  styleUrls: ['./personas-y-clase.component.css']
})
export class PersonasYClaseComponent implements OnInit{

  constructor(private dialogRef: MatDialogRef<PersonasYClaseComponent>, private BusquedaYListaService: BusquedaYListaService ){}
    
  /*--------------CONTADORES-----------------*/
    contador: number = 1;
    contador1: number = 0;

    incrementarContador() {
      this.contador++;
      this.enviarDatosCambiados();
    }
  
    decrementarContador() {
      if (this.contador > 0) {
        this.contador--;
      }
      this.enviarDatosCambiados();
    }

    incrementarContador1() {
      this.contador1++;
      this.enviarDatosCambiados();
    }
  
    decrementarContador1() {
      if (this.contador1 > 0) {
        this.contador1--;
      }
      this.enviarDatosCambiados();
    }

    private enviarDatosCambiados() {
      const datos = {
        contador: this.contador,
        contador1: this.contador1
        // Agrega aquí los demás datos que quieras recolectar de los campos
      };
      this.BusquedaYListaService.enviarDatosCambiados(datos);
    }
  /*----------------------------------------*/

  cerrar(){
    this.dialogRef.close();
  }

  ngOnInit(): void{

  }
}
