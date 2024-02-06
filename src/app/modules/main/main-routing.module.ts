import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';
import { NotFoundComponent } from '@shared/components/not-found/not-found.component';
import { MainContentComponent } from './main-content/main-content.component';
import { AuthGuard } from '@core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: MainContentComponent,
      },
      {
        path: 'auth',
        loadChildren: () =>
        import('../auth/auth.module').then((m) => m.AuthModule),
      },
      {
        path: 'product',
        loadChildren: () =>
          import('../product/products.module').then((m) => m.ProductModule),
      },
      {
        path: 'orders',
        loadChildren: () =>
          import('../orders/orders.module').then((m) => m.OrdersModule),
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule { }
