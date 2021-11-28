import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DescriptionComponent } from './description/description.component';
import { CartComponent } from './cart/cart.component';
import { DeliveryComponent } from './delivery/delivery.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  {path: 'description/:id', component: DescriptionComponent},
  {path: 'cart', component: CartComponent},
  {path: 'delivery', component: DeliveryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
