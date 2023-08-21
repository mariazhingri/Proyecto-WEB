import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BusquedaYListaService } from '../servicios/busqueda-y-lista.service';

@Component({
  selector: 'app-solo-ida',
  templateUrl: './solo-ida.component.html',
  styleUrls: ['./solo-ida.component.css']
})
export class SoloIdaComponent {


  intercambiar: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder,private BusquedaYListaService: BusquedaYListaService) {

    this.intercambiar = this.formBuilder.group({
      input1: ['', Validators.required],
      input2: ['', Validators.required],
      fecha_ida: ['', Validators.required]
    })
  }

  intercambio_info(){
    const temp = this.intercambiar.value.input1;
    this.intercambiar.patchValue({
    input1: this.intercambiar.value.input2,
    input2: temp
    });
  }
/*-------------abrir componente lista de vuelos------------------------*/

validar_fomulario(){
  if (this.intercambiar.valid) {
    this.BusquedaYListaService.toggleComponenteListaVuelos(true);
  } else {
    // Mostrar un mensaje de error o realizar otras acciones
  }
}
}
