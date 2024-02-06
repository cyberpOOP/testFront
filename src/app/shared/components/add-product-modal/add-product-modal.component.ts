import { Component, Output, EventEmitter } from '@angular/core';
import { ICreateProduct } from '@shared/models/product/product';

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.css'],
})
export class AddProductModalComponent {
  @Output() closeModalEvent = new EventEmitter<void>();
  @Output() addProductEvent = new EventEmitter<any>();

  public product: ICreateProduct = {
    name: '',
    quantityInStock: 1,
    price: 0,
  };

  closeModal(event?: MouseEvent): void {
    if (!event || (event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.closeModalEvent.emit();
    }
  }

  addProduct(): void {
    this.addProductEvent.emit({
      ...this.product,
    });
  }
}

