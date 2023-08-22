import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { ReservavuelosService } from '../servicios/reservavuelos.service';

export interface CRUD {
    id: number;
    origen: string;
    destino: string;
    fecha_ida: string;
    fecha_vuelta: string;
    btn_cliqueado: string;
}
const ELEMENT_DATA: CRUD[] = [
  {id: 1, 
    origen: 'Guayaquil', 
    destino: 'Quito', 
    fecha_ida: '2023-08-21',
    fecha_vuelta: '2023-08-22',
    btn_cliqueado:'Ida y Vuelta'
  },
  {id: 2, 
    origen: 'Cuenca', 
    destino: 'Manta', 
    fecha_ida: '2023-10-01',
    fecha_vuelta: '',
    btn_cliqueado:'Solo Ida'
  },
  {id: 3, 
    origen: 'Guano', 
    destino: 'Ambato', 
    fecha_ida: '2023-09-16',
    fecha_vuelta: '2023-11-07',
    btn_cliqueado:'Ida y Vuelta'
  },
  {id: 4, 
    origen: 'Loja', 
    destino: 'Quito', 
    fecha_ida: '2023-08-21',
    fecha_vuelta: '2023-08-23',
    btn_cliqueado:'Ida y Vuelta'
  }
];

@Component({
  selector: 'app-tabla-p',
  templateUrl: './tabla-p.component.html',
  styleUrls: ['./tabla-p.component.css']
})
export class TablaPComponent {

  lista_crud: CRUD [] = [];

  displayedColumns: string[] = ['id', 'origen', 'destino', 'fecha_ida','fecha_vuelta','btn_cliqueado'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor(private router: Router,private ReservavuelosService:ReservavuelosService,private dialog:MatDialog) {}
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    //this.cargarlista();
  }

 

}
