import { Injectable } from '@angular/core';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {
    items: any = [];
    constructor() { }

  addToLocalStorage(prod: Product){
    let cartItems: Product[] = []
    cartItems = [...cartItems, prod];
    localStorage.setItem(prod.id, JSON.stringify({id: prod.id, name: prod.name, price: prod.price, qtt: 1, img: prod.img[0]}));
  }

  findItem(id: string){
    let findProd = JSON.parse(localStorage.getItem(id) ?? "[]")
    console.log(findProd)
    return findProd
  }

  loadItemsFromStorage(): Array<any>{
    const items: any[] = []
    for (let key of Object.keys(localStorage)){
        items.push(JSON.parse(localStorage.getItem(key) ?? "[]"))
    }
    console.log("loadItemsFromStorage", items)
    return items;
  }

  getTotal() : number{
    const items = this.loadItemsFromStorage();
    let sumCosts = items.map((el) => el.price * el.qtt) || [0]
    const total = sumCosts.length > 0? sumCosts.reduce(function(acc: any, curr: any){return acc + curr}): 0;
    return total
  }

  addQtt(id: string){
    let foundProd = this.findItem(id);
    localStorage.setItem(id, JSON.stringify({...foundProd, qtt: foundProd.qtt +=1}))
  }

  minusQtt(id: string){
    let foundProd = this.findItem(id);
    localStorage.setItem(id, JSON.stringify({...foundProd, qtt: foundProd.qtt -=1}))
  }

  removeItem(id: string):void{
    localStorage.removeItem(id)
  }

  clearCart():void{
    localStorage.clear();
  }
}
