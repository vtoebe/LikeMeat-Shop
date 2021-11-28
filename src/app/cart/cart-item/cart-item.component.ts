import { Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import { PersistenceService } from 'src/app/persistence.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() price:  number = 0;
  @Input() img:  string = '';
  @Input() qtt:  number = 1;
  @Output() updateQuantity = new EventEmitter();
  @Output() removeItem = new EventEmitter();

  constructor(private persist: PersistenceService) { }
  items: any;

  ngOnInit(): void {
    this.items = this.persist.loadItemsFromStorage();
  }

  downQtt(id: string){
    let decProd = this.persist.findItem(id)
    if (decProd.qtt == 1){
      this.removeFromCart(id)
    } else { this.persist.minusQtt(id)}
    this.updateQuantity.emit()
  }

  upQtt(id: string){
    this.persist.addQtt(id)
    this.updateQuantity.emit()
  }

  removeFromCart(id:string){
    this.persist.removeItem(id);
    this.removeItem.emit()

    // window.location.reload();
  }

}
