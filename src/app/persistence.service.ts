import { Injectable } from '@angular/core';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {

  constructor() { }

  addToSessionStorage(prod: Product){
    let cartItems: Product[] = JSON.parse(sessionStorage.getItem("products")?? "[]")
    cartItems = [...cartItems, prod];
    sessionStorage.setItem(prod.id, JSON.stringify({name: prod.name, price: prod.price, qtt: 1}));
  }


}
