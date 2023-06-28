import { Component, OnInit,TemplateRef  } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { PersonasYClaseComponent } from '../personas-y-clase/personas-y-clase.component';
import { MatDialogRef } from '@angular/material/dialog';
import { ListaVuelosComponent } from '../lista-vuelos/lista-vuelos.component';
import { FormaDePagoComponent } from 'src/app/forma-de-pago/forma-de-pago.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



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
  intercambiar: FormGroup;
  intercambiar_solo_ida: FormGroup;
  intercambiar_multidestino: FormGroup;
  
  idayvuelta = true;
  soloida = false;
  multidestino = false;
  
  abrirmultidestino(){
    this.multidestino=true;
    this.idayvuelta=false;
    this.soloida=false;
    this.lista_vuelos = false;
  }
  abrirsoloida(){
    this.multidestino=false;
    this.idayvuelta=false;
    this.soloida=true;
    this.lista_vuelos = false;
  }
  abrirsidayvuelta(){
    this.multidestino=false;
    this.idayvuelta=true;
    this.soloida=false;
    this.lista_vuelos = false;
  }

 
 
  constructor(private router: Router,private dialog:MatDialog, private formBuilder: FormBuilder) { 
    this.intercambiar = this.formBuilder.group({
      input1: ['', Validators.required],
      input2: ['', Validators.required]
    })
    
    this.intercambiar = this.formBuilder.group({
      input1: '',
      input2: ''
    });

    this.intercambiar_solo_ida = this.formBuilder.group({
      input1_solo_ida: '',
      input2_solo_ida: ''
    });

    this.intercambiar_multidestino = this.formBuilder.group({
      input1_multidestino: '',
      input2_multidestino: ''
    });

    
  }

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
/*-------------------------BOTON INTERCAMBIAR INFORMACIO-----*/
ngOnInit(): void{
  
}

intercambio_info(){
  const temp = this.intercambiar.value.input1;
  this.intercambiar.patchValue({
  input1: this.intercambiar.value.input2,
  input2: temp
});
}
intercambio_info2(){
  const tempo = this.intercambiar_solo_ida.value.input1_solo_ida;
  this.intercambiar_solo_ida.patchValue({
  input1_solo_ida: this.intercambiar_solo_ida.value.input2_solo_ida,
  input2_solo_ida: tempo
});
}

intercambio_info3(){
  const tempos = this.intercambiar_multidestino.value.input1_multidestino;
  this.intercambiar_multidestino.patchValue({
  input1_multidestino: this.intercambiar_multidestino.value.input2_multidestino,
  input2_multidestino: tempos
});
}
}


