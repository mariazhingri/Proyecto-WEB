import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BusquedaYListaService } from '../servicios/busqueda-y-lista.service';

@Component({
  selector: 'app-multidestino',
  templateUrl: './multidestino.component.html',
  styleUrls: ['./multidestino.component.css']
})
export class MultidestinoComponent {

  intercambiar: FormGroup;

  constructor(private formBuilder: FormBuilder,private BusquedaYListaService: BusquedaYListaService) { 

    this.intercambiar = this.formBuilder.group({
      input1: ['', Validators.required],
      input2: ['', Validators.required],
      fecha_ida: ['', Validators.required]
    })

    
  }

/*-------------------------------AGREGAR O ELIMINAR TRAMO---------------------------------------*/
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
/*-------------abrir componente lista de vuelos------------------------*/
validar_fomulario(){
  if (this.intercambiar.valid) {
    this.BusquedaYListaService.toggleComponenteListaVuelos(true);
  } else {
    // Mostrar un mensaje de error o realizar otras acciones
  }
}
/*-------------------------------------*/
  ngOnInit(): void{
  
  }
  
  
  intercambio_info(){
    const temp = this.intercambiar.value.input1;
    this.intercambiar.patchValue({
    input1: this.intercambiar.value.input2,
    input2: temp
    });
  }
}
