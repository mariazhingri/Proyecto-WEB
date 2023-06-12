import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-personas-y-clase',
  templateUrl: './personas-y-clase.component.html',
  styleUrls: ['./personas-y-clase.component.css']
})
export class PersonasYClaseComponent implements OnInit{

  constructor(private dialogRef: MatDialogRef<PersonasYClaseComponent>){}
    
  /*--------------CONTADORES-----------------*/
    contador: number = 1;
    contador1: number = 0;

    incrementarContador() {
      this.contador++;
    }
  
    decrementarContador() {
      if (this.contador > 0) {
        this.contador--;
      }
    }

    incrementarContador1() {
      this.contador1++;
    }
  
    decrementarContador1() {
      if (this.contador1 > 0) {
        this.contador1--;
      }
    }
  /*----------------------------------------*/

  ngOnInit(): void{

  }
}
