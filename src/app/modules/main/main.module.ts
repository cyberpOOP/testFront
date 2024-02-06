import { NgModule } from "@angular/core";
import { MainComponent } from "@modules/main/main.component";
import { SharedModule } from "@shared/shared.module";
import { MainRoutingModule } from "@modules/main/main-routing.module";
import { CoreModule } from "@core/core.module";
import { MainContentComponent } from "./main-content/main-content.component";
import { ProductModule } from "@modules/product/products.module";

@NgModule({
  declarations: [
    MainComponent,
    MainContentComponent,
  ],
  imports: [
    SharedModule,
    MainRoutingModule,
    ProductModule,
  ],
})
export class MainModule { }

