import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '@shared/models/product/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: IProduct;

  constructor(private router: Router) { }

  navigateToProductDetail(id: number): void {
    this.router.navigate(['/product', id]);
  }
}