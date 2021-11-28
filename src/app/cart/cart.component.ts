import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, Input, OnInit } from '@angular/core';
import { PersistenceService } from '../persistence.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() name: string = '';
  @Input() price:  number = 0;
  @Input() img:  string = '';
  @Input() qtt:  number = 1;
  items: any;
  total: any;

  constructor(private persist: PersistenceService) {
    this.items = this.persist.loadItems();
    this.items = this.items.map((el: string) => JSON.parse(el))
    this.total = this.items.map((el: { price: any; }) => el.price)
    this.total = this.total.reduce(function(acc: any, curr: any){return acc + curr})
    console.log(this.total)

  }

  ngOnInit(): void {

  }

}
