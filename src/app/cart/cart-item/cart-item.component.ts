import { Component, OnInit, Input } from '@angular/core';
import { PersistenceService } from 'src/app/persistence.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() name: string = '';
  @Input() price:  number = 0;
  @Input() img:  string = '';
  @Input() qtt:  number = 1;

  constructor(private persist: PersistenceService) { }
  items: any;

  ngOnInit(): void {
    this.items = this.persist.loadItems();
  }

}
