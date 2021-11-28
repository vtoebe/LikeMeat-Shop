import { Component, OnInit, Input} from '@angular/core';
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

  constructor(private persist: PersistenceService) { }
  items: any;

  ngOnInit(): void {
    this.items = this.persist.loadItems();
  }


  decrementQtt(id: string, qtt: number){
    let decProd = this.persist.findItem(id)
    if (decProd.qtt = 1){
      console.log('vai remover')
      this.removeFromCart(id)
    } else { console.log('faz update'); this.persist.updateQtt(id, qtt-1)}

  }

  incrementQtt(id: string, qtt: number){
    this.persist.updateQtt(id, qtt+1)
  }

  removeFromCart(id:string){
    this.persist.removeItem(id);
    this.items = this.persist.loadItems();
  }

}
