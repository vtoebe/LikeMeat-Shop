import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../product.service';
import { PersistenceService } from 'src/app/persistence.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  @Input() id: string ='';
  @Input() name: string ='';
  @Input() firstLine: string ='';
  @Input() description: string ='';
  @Input() based: string ='';
  @Input() price: number = 0;
  @Input() img: Array<string> = [];

  prod: any = [];

  constructor(private productService: ProductService, private route: ActivatedRoute, private persist: PersistenceService) {   }

  ngOnInit(): void {
    this.prod = this.productService.productList.find(element => element.id == this.route.snapshot.params['id'])
    this.id = this.prod.id;
    this.name = this.prod.name;
    this.firstLine = this.prod.firstLine;
    this.description = this.prod.description;
    this.based = this.prod.based;
    this.price = this.prod.price;
    this.img = this.prod.img;
 }

 addToCart(id: string): void {
  console.log(id)
  this.persist.addToSessionStorage(this.prod);
}

}
