import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusquedaYListaService {
  datosGuardados: any[] = [];
  
  intercambiar: FormGroup = new FormGroup({});

  private ComponenteListaVuelosSubject: Subject<boolean> = new Subject<boolean>();
  public ComponenteListaVuelos$ = this.ComponenteListaVuelosSubject.asObservable();

  toggleComponenteListaVuelos(nav: boolean) {
    this.ComponenteListaVuelosSubject.next(nav);
  }
/*---------------------datos de botones de busqueda de vuelos-----------------*/
  private botonClicadoSource = new Subject<string>();
  botonClicado$ = this.botonClicadoSource.asObservable();

  enviarBotonClicado(boton: string) {
    this.botonClicadoSource.next(boton);
  }
/*---------------------datos de contadores-----------------*/
  private datosCambiadosSource = new Subject<any>();
  datosCambiados$ = this.datosCambiadosSource.asObservable();

  enviarDatosCambiados(datos: any) {
    this.datosCambiadosSource.next(datos);
  }

/*--------------------------------------------------------------*/

  mostrar_info() {
    const datosIngresados = {
      origen: this.intercambiar.get('input1')?.value,
      destino: this.intercambiar.get('input2')?.value,
      fecha_ida: this.intercambiar.get('fecha_ida')?.value,
      fecha_vuelta: this.intercambiar.get('fecha_vuelta')?.value
    };
  
    this.datosGuardados.push(datosIngresados);
  
    console.log('Datos guardados:', this.datosGuardados);
  }


}
