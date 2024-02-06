import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MaterialModule } from '@shared/material/material.module';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { AddProductModalComponent } from './components/add-product-modal/add-product-modal.component';
import { FormsModule } from '@angular/forms';
import { EditProductModalComponent } from './components/edit-product-modal/edit-product-modal.component';
import { AddToOrderModalComponent } from './components/add-to-order-modal/add-to-order-modal.component';
import { OrderCardComponent } from './components/order-card/order-card.component';

@NgModule({
  imports: [MatIconModule, CurrencyPipe, CommonModule, RouterLink, MaterialModule, FormsModule],
  declarations: [
    HeaderComponent,
    NotFoundComponent,
    LoadingSpinnerComponent,
    ProductCardComponent,
    AddProductModalComponent,
    EditProductModalComponent,
    AddToOrderModalComponent,
    OrderCardComponent,
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    NotFoundComponent,
    LoadingSpinnerComponent,
    ProductCardComponent,
    AddProductModalComponent,
    EditProductModalComponent,
    AddToOrderModalComponent,
    OrderCardComponent,
  ],
})
export class SharedModule {}
