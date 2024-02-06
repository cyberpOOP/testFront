import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-to-order-modal',
  templateUrl: './add-to-order-modal.component.html',
  styleUrls: ['./add-to-order-modal.component.css'],
})
export class AddToOrderModalComponent {
  @Output() closeModalEvent = new EventEmitter<void>();
  @Output() addToOrderEvent = new EventEmitter<any>();
  public quantity: number;

  closeModal(event?: MouseEvent): void {
    if (!event || (event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.closeModalEvent.emit();
    }
  }

  addToOrder(): void {
    this.addToOrderEvent.emit(this.quantity);
  }
}

