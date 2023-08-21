import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BusquedaYListaService } from '../servicios/busqueda-y-lista.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-ida-y-vuelta',
  templateUrl: './ida-y-vuelta.component.html',
  styleUrls: ['./ida-y-vuelta.component.css']
})
export class IdaYVueltaComponent {

  intercambiar: FormGroup;
  datosGuardados: any[] = [];
  datosCargados = false;
  //datosContador: any;

  ComponenteListaVuelos: boolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder,private BusquedaYListaService: BusquedaYListaService) {

    this.intercambiar = this.formBuilder.group({
      input1: ['', Validators.required],
      input2: ['', Validators.required],
      fecha_ida: ['', Validators.required],
      fecha_vuelta: ['', Validators.required]
    })

    
    }

  

intercambio_info(){
  const temp = this.intercambiar.value.input1;
  this.intercambiar.patchValue({
  input1: this.intercambiar.value.input2,
  input2: temp
  });
}

ngOnInit() {
  this.BusquedaYListaService.botonClicado$.subscribe((boton: string) => {
    //this.BusquedaYListaService.datosCambiados$.subscribe((datos: any) => {
    const datosIngresados = {
      origen: this.intercambiar.get('input1')?.value,
      destino: this.intercambiar.get('input2')?.value,
      fecha_ida: this.intercambiar.get('fecha_ida')?.value,
      fecha_vuelta: this.intercambiar.get('fecha_vuelta')?.value,
      botonClicado: boton, // Agregamos el nombre del botón clicado al objeto
      //contador: datos.contador,
      //contador1: datos.contador1
   
    };

    this.datosGuardados.push(datosIngresados);
    this.datosCargados = true;
  });
//});
  /*this.BusquedaYListaService.datosCambiados$.subscribe((datos: any) => {
    // Agregar los datos de los campos al array datosGuardados
    this.datosGuardados.push({
      contador: datos.contador,
      contador1: datos.contador1
    });
  });*/
}



async mostrar_info() {
  this.BusquedaYListaService.toggleComponenteListaVuelos(true);
  await this.esperarDatosCargados();
  console.log('Datos guardados:', this.datosGuardados);
}

private esperarDatosCargados(): Promise<void> {
  return new Promise<void>((resolve) => {
    if (this.datosCargados) {
      resolve();
    } else {
      setTimeout(() => this.esperarDatosCargados().then(resolve), 100); // Revisar cada 100ms si los datos están cargados
    }
  });
}
/*-----------------------FUNCION DE BOTON BUSCAR -> VALIDAR CAMPOS----------------------*/

validar_formulario() {
  if (this.intercambiar.valid) {
    this.BusquedaYListaService.toggleComponenteListaVuelos(true);
    this.intercambio_info();
  } else {
    console.log('El formulario no es válido. Verifica los campos ingresados.');
  }
}

}

