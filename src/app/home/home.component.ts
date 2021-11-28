import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productList: Product[] =[];
  constructor( private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productList = this.productService.productList;
  }


}
