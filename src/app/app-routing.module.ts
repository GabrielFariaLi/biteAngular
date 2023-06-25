import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { MyOrdersComponent } from './pages/my-orders/my-orders.component';
import { KitchenComponent } from './pages/kitchen/kitchen.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'myOrders', component: MyOrdersComponent },
  { path: 'cart', component: CartComponent },
  { path: 'kitchen', component: KitchenComponent },
  /*  { path: 'about', component:  },
  { path: 'contact', component:  }, */
  { path: '**', redirectTo: '/home' }, // Redirect any other route to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
