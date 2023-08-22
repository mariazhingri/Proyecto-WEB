import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { vuelosinterface } from '../interfaces/vuelosinterface';
import { CRUD } from "../tabla-p/tabla-p.component";

@Injectable({
  providedIn: 'root'
})
export class ReservavuelosService {

    private storageKey = 'lista_crud';
    usuarioSeleccionado!: CRUD;
  
    lista_crud: CRUD[] = [];

    constructor() {
        // Recupera la lista almacenada del almacenamiento local al inicializar el servicio
        const storedList = localStorage.getItem(this.storageKey);
        if (storedList) {
          this.lista_crud = JSON.parse(storedList);
        }
      }

      getlista_crud(): CRUD[] {
        return this.lista_crud.slice();
      }

      agregarusuario(usuario: CRUD) {
        this.lista_crud.push(usuario);
        this.actualizarAlmacenamientoLocal(); // Actualiza el almacenamiento local después de agregar un elemento
      }

      private actualizarAlmacenamientoLocal() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.lista_crud));
      }
}
