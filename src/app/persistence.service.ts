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
    sessionStorage.setItem(prod.id, JSON.stringify({id: prod.id, name: prod.name, price: prod.price, qtt: 1, img: prod.img[0]}));
  }

  findItem(id: string){
    let findProd = JSON.parse(sessionStorage.getItem(id) ?? "[]")
    console.log(findProd)
    return findProd
  }

  loadItems(): Array<string>{
    let items: any = [];
    for (let key of Object.keys(sessionStorage)){
      items = [...items, sessionStorage.getItem(key)]
    }
    return  items;
  }

  updateQtt(id: string, newqtt: number){
    let foundProd = this.findItem(id);
    sessionStorage.setItem(id, JSON.stringify({...foundProd, qtt: newqtt}))
  }

  removeItem(id: string):void{
    sessionStorage.removeItem(id);
  }

  clearCart():void{
    sessionStorage.clear();
  }

}
