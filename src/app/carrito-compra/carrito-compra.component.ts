import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { DatosComponent } from '../modulo-packagestrip/datos/datos.component';

@Component({
  selector: 'app-carrito-compra',
  templateUrl: './carrito-compra.component.html',
  styleUrls: ['./carrito-compra.component.css'],
})
export class CarritoCompraComponent {
  constructor(private dialog: MatDialog, private router: Router) {}

  deleteCard(event: Event): void {
    const cardElement = (event.target as HTMLElement).closest('.card');
    if (cardElement) {
      cardElement.remove();
      const remainingCards = document.querySelectorAll('.card');
      if (remainingCards.length === 0) {
        const messageContainer = document.getElementById('message-container');
        if (messageContainer) {
          messageContainer.textContent = 'No hay reservas.';
        }
      }
    }
  }

  openDialogPackTrip() {
    this.dialog.open(DatosComponent);
  }
}
