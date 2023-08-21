import { Component } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';


export interface PeriodicElement {
  id: number;
  origen: string;
  destino: string;
  fecha_ida: string;
  fecha_vuelta: string;
  btn_cliqueado: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, origen: 'Guayaquil', destino: 'Quito', fecha_ida: '2023-08-21',fecha_vuelta: '2023-08-29',btn_cliqueado:'Ida y Vuelta'},
  {id: 2, origen: 'Cuenca', destino: 'Manta', fecha_ida: '2023-10-09',fecha_vuelta: '',btn_cliqueado:'Solo Ida'}
  
];

@Component({
  selector: 'app-tabla-back-end',
  templateUrl: './tabla-back-end.component.html',
  styleUrls: ['./tabla-back-end.component.css'],
})
export class TablaBackEndComponent {

  constructor(private router: Router,private dialog:MatDialog) { }

  displayedColumns: string[] = ['id', 'origen', 'destino', 'fecha_ida','fecha_vuelta','btn_cliqueado'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
