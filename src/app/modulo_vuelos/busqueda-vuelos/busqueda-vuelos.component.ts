import { Component, OnInit,TemplateRef  } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { PersonasYClaseComponent } from '../personas-y-clase/personas-y-clase.component';
import { MatDialogRef } from '@angular/material/dialog';
import { ListaVuelosComponent } from '../lista-vuelos/lista-vuelos.component';
import { FormaDePagoComponent } from 'src/app/forma-de-pago/forma-de-pago.component';



@Component({
  selector: 'app-busqueda-vuelos',
  templateUrl: './busqueda-vuelos.component.html',
  styleUrls: ['./busqueda-vuelos.component.css']
})
export class BusquedaVuelosComponent implements OnInit{

  //soloida: TemplateRef<any>=null;
  //soloida:any
  //idayvuelta:any;
  //multidestino: any
  
  idayvuelta = true;
  soloida = false;
  multidestino = false;
  
  abrirmultidestino(){
    this.multidestino=true;
    this.idayvuelta=false;
    this.soloida=false;
  }
  abrirsoloida(){
    this.multidestino=false;
    this.idayvuelta=false;
    this.soloida=true;
  }
  abrirsidayvuelta(){
    this.multidestino=false;
    this.idayvuelta=true;
    this.soloida=false;
  }

  ngOnInit(): void{
  }
 
  constructor(private router: Router,private dialog:MatDialog) { }

/*-------------------------------VENTANA EMERGENTE DE PERSONASYCLASE---------------------------------------*/
  openDialogpeersonayclase(){
    this.dialog.open(PersonasYClaseComponent)
  }



/*-------------------------------AGREGAR O ELIMINARS TRAMO---------------------------------------*/
  divs: number[] = [];
  contador: number = 2;
  

  agregarDiv() {
    this.divs.push(this.contador++);
    //this.contador++;
  }
  eliminarDiv(index: number) {
    this.divs.splice(index, 1);
    this.contador--;
  }

  /*-------------------------------BOTON BUSQUEDA ---> ABRIR COMPONENTE LISTA DE VUELOS---------------------------------------*/
  lista_vuelos = false;
  abrirlista_vuelos(){
    this.lista_vuelos = true;
  }

}


