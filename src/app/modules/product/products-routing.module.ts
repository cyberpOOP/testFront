import { RouterModule, Routes } from "@angular/router";
import { ProductPageComponent } from "./product-page/product-page.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: ':id',
        component: ProductPageComponent,
    },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule { }