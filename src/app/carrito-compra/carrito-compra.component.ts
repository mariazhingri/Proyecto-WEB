import { Component } from '@angular/core';

@Component({
  selector: 'app-carrito-compra',
  templateUrl: './carrito-compra.component.html',
  styleUrls: ['./carrito-compra.component.css']
})
export class CarritoCompraComponent {
  /*deleteCard(event: Event): void {
    const cardElement = (event.target as HTMLElement).closest('.card');
    if (cardElement) {
      cardElement.remove();
    }
  }*/

  deleteCard(event: Event): void {
    const cardElement = (event.target as HTMLElement).closest('.card');
    if (cardElement) {
      cardElement.remove();
      const remainingCards = document.querySelectorAll('.card');
      if (remainingCards.length === 0) {
        const messageContainer = document.getElementById('message-container');
        if (messageContainer) {
          messageContainer.textContent = 'No hay reservas.';
          // Puedes personalizar el mensaje o el estilo según tus necesidades.
        }
      }
    }
  }
  

}

