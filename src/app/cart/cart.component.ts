import { Component, Input, OnInit } from '@angular/core';
import { PersistenceService } from '../persistence.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() price:  number = 0;
  @Input() img:  string = '';
  @Input() qtt:  number = 1;
  items: any;
  sumCosts = [0]
  total = 0;

  constructor(private persist: PersistenceService) {

  }

  ngOnInit(): void {
    this.items = this.persist.loadItems();
    this.items = this.items.map((el: string) => JSON.parse(el))
    this.sumCosts = this.items.map((el: { price: any; }) => el.price) || [0]
    this.total = this.sumCosts.length > 1? this.sumCosts.reduce(function(acc: any, curr: any){return acc + curr}): 0;
  }

  clearCart(){
    this.persist.clearCart();
    this.items = this.persist.loadItems();
  }

}
