import { NgModule } from '@angular/core';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductRoutingModule } from './products-routing.module';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@core/core.module';
import { ProductsComponent } from './products.component';
import { ItemsSectionComponent } from './products-section/products-section.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductPageComponent,
    ProductsComponent,
    ItemsSectionComponent,
  ],
  imports: [ProductRoutingModule, SharedModule, CoreModule, FormsModule],
  exports: [ItemsSectionComponent],
})
export class ProductModule {}
