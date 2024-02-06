import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ICreateProduct, IProduct } from '@shared/models/product/product';

@Component({
  selector: 'app-edit-product-modal',
  templateUrl: './edit-product-modal.component.html',
  styleUrls: ['./edit-product-modal.component.css'],
})
export class EditProductModalComponent {
  @Input() product: IProduct;
  @Output() closeModalEvent = new EventEmitter<void>();
  @Output() editProductEvent = new EventEmitter<any>();

  closeModal(event?: MouseEvent): void {
    if (!event || (event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.closeModalEvent.emit();
    }
  }

  editProduct(): void {
    this.editProductEvent.emit({
      ...this.product,
    });
  }
}

