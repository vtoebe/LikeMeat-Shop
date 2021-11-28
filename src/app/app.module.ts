import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DescriptionComponent } from './description/description.component';
import { CartComponent } from './cart/cart.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { ProductWrapperComponent } from './home/product-wrapper/product-wrapper.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { CartSummaryComponent } from './cart/cart-summary/cart-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DescriptionComponent,
    CartComponent,
    DeliveryComponent,
    ProductWrapperComponent,
    CartItemComponent,
    CartSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
