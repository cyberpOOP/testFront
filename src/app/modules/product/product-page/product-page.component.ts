import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '@core/services/order.service';
import { ProductService } from '@core/services/product.service';
import { ICreateOrder } from '@shared/models/order/order';
import { IProduct } from '@shared/models/product/product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  @Input() product: IProduct;
  public isLoading: boolean = true;
  isEditProductModalOpen = false;
  isAddToOrderModalOpen = false;

  constructor(
    private productService: ProductService,
    private orderService: OrderService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.productService.getById(data['id']).subscribe((product) => {
        this.product = product;
        this.isLoading = false;
      });
    });
  }

  openEditProductModal(): void {
    this.isEditProductModalOpen = true;
  }

  closeEditProductModal(): void {
    this.isEditProductModalOpen = false;
  }

  openAddToOrderModal(): void {
    this.isAddToOrderModalOpen = true;
  }

  closeAddToOrderModal(): void {
    this.isAddToOrderModalOpen = false;
  }

  editProduct(changedProduct: IProduct): void {
    this.productService
      .edit(changedProduct.id, changedProduct)
      .subscribe((editedProduct) => {
        this.product = editedProduct;
      });

    this.closeEditProductModal();
  }

  deleteProduct(): void {
    this.productService.delete(this.product.id).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  addToOrder(quantity: number): void {
    this.isLoading = true;

    const order: ICreateOrder = {
      userEmail: localStorage.getItem('email') || '',
      orderItems: [
        {
          productId: this.product.id,
          quantity,
        }
      ]
    }

    this.orderService.create(order).subscribe(() => this.isLoading = false);

    this.closeAddToOrderModal();
  }
}
