import { Component, OnInit } from '@angular/core';
import { ProductService } from '@core/services/product.service';
import { ICreateProduct, IProduct } from '@shared/models/product/product';

@Component({
  selector: 'app-products-section',
  templateUrl: './products-section.component.html',
  styleUrls: ['./products-section.component.css'],
})
export class ItemsSectionComponent implements OnInit {
  public products: IProduct[];
  public isLoading: boolean = true;
  isAddProductModalOpen = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe((products) => {
      this.products = products;
      this.isLoading = false;
    });
  }

  openAddProductModal(): void {
    this.isAddProductModalOpen = true;
  }

  closeAddProductModal(): void {
    this.isAddProductModalOpen = false;
  }

  addProduct(newProduct: ICreateProduct): void {
    this.productService.create(newProduct).subscribe((addedProduct) => {
      this.products.push(addedProduct);
    });

    this.closeAddProductModal();
  }

  renewProducts(): void {
    this.isLoading = true;
    this.productService.renewProductQuantity().subscribe(() => this.isLoading = false );
  }
}
