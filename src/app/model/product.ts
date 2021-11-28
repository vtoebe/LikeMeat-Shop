export class Product{
  id: string;
  name: string;
  firstLine: string;
  description: string;
  based: string;
  price: number;
  img: Array<string>;

  constructor(id: string, name: string, firstLine: string, description: string, based: string, price: number, img: Array<string>){
    this.id = id;
    this.name = name;
    this.firstLine = firstLine;
    this.description = description;
    this.based = based;
    this.price = price;
    this.img = img;
  }
}

