import { Component, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/product';
import { PersistenceService } from 'src/app/persistence.service';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-wrapper',
  templateUrl: './product-wrapper.component.html',
  styleUrls: ['./product-wrapper.component.css']
})
export class ProductWrapperComponent implements OnInit {
  @Input() id: string ='';
  @Input() name: string ='';
  @Input() description: string ='';
  @Input() price: number = 0;
  @Input() img: Array<string> = [];

  productList: Product[] =[];
  cartItem: any;
  constructor( private productService: ProductService, private persist: PersistenceService) { }

  ngOnInit(): void {
    this.productList = this.productService.productList;
  }

  addToCart(id: string): void {
    console.log(id)
    this.cartItem = this.productService.productList.find(element => element.id == id)
    this.persist.addToLocalStorage(this.cartItem);
  }

}
