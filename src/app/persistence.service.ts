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
    sessionStorage.setItem(prod.id, JSON.stringify({name: prod.name, price: prod.price, qtt: 1, img: prod.img[0]}));
  }

  loadItems(): Array<string>{
    let items: any = [];
    for (let key of Object.keys(sessionStorage)){
      items = [...items, sessionStorage.getItem(key)]
    }
    return  items;
  }


}
