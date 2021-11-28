import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { PersistenceService } from '../persistence.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any;
  sumCosts = [0]
  total = 0;

  constructor(private persist: PersistenceService) {
  }

  ngOnInit(): void {
    this.reloadItems();
  }

  reloadItems(){
    this.items = this.persist.loadItemsFromStorage();
    this.total = this.persist.getTotal();
  }

  clearCart(){
    this.persist.clearCart();
    this.reloadItems();
  }

}
