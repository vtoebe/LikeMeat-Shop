import { PersistenceService } from 'src/app/persistence.service';
import { Injectable } from '@angular/core';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public productList: Product[] = [
    {id: 'burguer',
      name: "Like Supreme Burguer",
      firstLine: "Your burger matters. Meat the real deal!",
      description: "Burger lovers to the fore! Our Like Supreme Burger has an amazing taste and a firm, juicy texture for maximum enjoyment. The burger is full of the plant-based goodness of high quality peas and is a great source of protein and fibre. Anyone can be a burger master with our LikeMeat patties, perfect for both a barbecue or a pan.",
      based: "100% plant-based. Rich in protein. Source of fibre. Lactose-free.",
      price: 4.84,
      img: ['/assets/img/burguer.png', '/assets/img/burg2.png', '/assets/img/burg3.png']},
      {id: 'nuggets',
        name: "Like Nuggets",
        firstLine: "Golden times begin!",
        description: "Enjoy your favourite meals in a light, meat-free and balanced way! With their juicy centre coated in crispy breadcrumbs, Like Nuggets are a great fast food alternative and a perfect snack on-the-go. A high protein content makes them a nutritious and filling main meal. Lovers of crispy food of all ages will enjoy this pure vegetable alternative made from certified organic soya.",
        based: "100% plant-based. Source of protein. Source of fibre. GMO-free soya. Gluten-free. Lactose-free",
        price: 4.18,
        img: ['/assets/img/nuggets.png', '/assets/img/nug2.png', '/assets/img/nug3.png']},
    {id: 'chicken-bites',
      name: "Like Chicken Bites",
      firstLine: "Watch it! They might bite back!",
      description: "Our organic Like Chicken Bites are a great way to serve a familiar flavour in a vegetarian, vegan or flexible lifestyle. The chunks are full of the plant-based goodness of high quality soybeans and rich in protein and fibre. Enjoy them as a fresh salad topping, a protein-rich side dish or as a main meal.",
      based: "100% plant-based. Rich in protein. Rich in fibre. GMO-free soya. Gluten-free. Lactose-free. Organic.",
      price: 3.84,
      img: ['/assets/img/chicken-bites.png', '/assets/img/cb2.png', '/assets/img/cb3.png']},
    {id: 'sausage',
      name: "Like Sausage",
      firstLine: "May the sausage be with you!",
      description: "The Like Bratwurst looks and tastes just as good as the popular original, achieving what was long thought impossible - natural barbecue fun with a meat-like texture. It is full of the plant-based goodness of high quality soybeans and is a great source of protein and fibre. Ideal for barbecues or frying.",
      based: "100% plant-based. Rich in protein. Rich in fibre. Low in fat. GMO-free soya. Gluten-free. Lactose-free.",
      price: 6.97,
      img: ['/assets/img/sausage.png', '/assets/img/ssg2.png', '/assets/img/ssg3.png']},
    { id: 'mince',
      name: "Like Mince",
      firstLine: "Bolognese without meat? No way! …Yes way!",
      description: "Want to rediscover the joy of plant-based cooking? LikeMeat presents the first real all-rounder with its organic Like Mince. Impress your guests with a spaghetti bolognese full of plant-based goodness. In addition to its high protein content, the mince is also low in fat and perfect for light meals.",
      based: "100% plant-based. Rich in protein. Rich in fibre. GMO-free soya. Gluten-free. Lactose-free. Organic.",
      price: 3.84,
      img: ['/assets/img/mince.png', '/assets/img/mnc2.png', '/assets/img/mnc3.png']},
      { id: 'kebab',
      name: "Like Kebab",
      firstLine: "Enjoy the classic.",
      description: "Our organic Like Kebab looks and tastes just as good as the popular original. It’s a hearty, flavoursome experience and a real hit once it’s on the table. It’s full of the plant-based goodness of high quality soybeans and rich in protein and fibre. Now you can enjoy this popular classic wholeheartedly. It’s naturally delicious!",
      based: "100% plant-based. Rich in protein. Rich in fibre. GMO-free soya. Gluten-free. Lactose-free. Organic.",
      price: 5.48,
      img: ['/assets/img/kebab.png', '/assets/img/kbb2.png', '/assets/img/kbb3.png']},
      { id: 'pulled-bbq',
      name: "Like Pulled BBQ",
      firstLine: "Grab yours quickly while there’s still some left!",
      description: "Our organic Like Pulled BBQ has a fine, tender texture and an authentic BBQ flavour. It’s full of the plant-based goodness of high-quality soybeans and rich in protein and fibre. Like Pulled BBQ can be prepared quickly and combined in many ways. What’s your favourite dish?",
      based: "100% plant-based. Rich in protein. Rich in fibre. GMO-free soya. Gluten-free. Lactose-free. Organic.",
      price: 3.84,
      img: ['/assets/img/pulled-bbq.png', '/assets/img/pbbq2.png', '/assets/img/pbbq3.png']},
      { id: 'grilled-chicken',
      name: "Like Grilled Chicken",
      firstLine: "Oh happy chicken!",
      description: "Our organic Like Grilled Chicken makes you happy! It has a fibrous texture and the taste reminds you classic chicken - but it is made of organic soya and is rich in protein and fibre. The authentic Hungarian pepper spice rounds off the Like Grilled Chicken flavour.",
      based: "100% plant-based. Rich in protein. Rich in fibre. GMO-free soya. Gluten-free. Lactose-free. Organic.",
      price: 4.18,
      img: ['/assets/img/grilled-chicken.png', '/assets/img/gck2.png', '/assets/img/gck3.png']},
      { id: 'schnitzel',
      name: "Like Schnitzel",
      firstLine: "One Like Schnitzel a day keeps the doctor away!",
      description: "These crispy schnitzels from LikeMeat prove once and for all that this natural variety tastes just as good as the original with its full, juicy flavours. Made without flavour enhancers, preservatives or gluten, this schnitzel guarantees pure enjoyment. It offers a tasty, health-conscious alternative to the popular classic and is ideal for people following a balanced and healthy diet.",
      based: "100% plant-based. Source of protein. Source of fibre. GMO-free soya. Gluten-free. Lactose-free.",
      price: 5.34,
      img: ['/assets/img/schnitzel.png', '/assets/img/sch2.png', '/assets/img/sch3.png']},
      { id: 'curry-sausage',
      name: "Like Curry Sausage",
      firstLine: "There’s no such thing as too much sauce!",
      description: "Do you always think that there isn’t enough sauce? So do we, and for this reason we have packed the curry sauce of the Like Curry Sausage directly into the sausage itself. Perfect for both grilling and frying, this plant-based sausage is a real hit with its spicy, aromatic taste.",
      based: "100% plant-based. Source of protein. Source of fibre. GMO-free soya. Gluten-free. Lactose-free.",
      price: 7.12,
      img: ['/assets/img/curry-ssg.png', '/assets/img/cssg2.png', '/assets/img/cssg3.png']},
      { id: 'gyros',
      name: "Like Gyros",
      firstLine: "Breaking plates the Greek way!",
      description: "The tasty organic Gyros strips from LikeMeat are proof that you can indulge in an amazing juicy, meat-like texture with hearty flavour while also going plant-based. Like Gyros is quick to prepare and extremely nutritious thanks to an extra dose of protein. The strips perfectly round off a crunchy salad or make a great addition to fresh pita bread.",
      based: "100% plant-based. Rich in protein. Rich in fibre. GMO-free soya. Gluten-free. Lactose-free. Organic.",
      price: 6.48,
      img: ['/assets/img/gyros.png', '/assets/img/gryros2.png', '/assets/img/gryros3.png']},
      { id: 'smoked-sausage',
      name: "Like Smoked Sausage",
      firstLine: "Everything has an end. Only the Like Sausage has an endless taste!",
      description: "Like Smoked Sausages combine the smoked taste of ham with the firm bite of a sausage. It is full of the plant-based goodness of high quality pea beans and is a great source of protein and fibre. Whether cooked on the barbecue or in the pan, Like Smoked Sausage brings delicious food to health-conscious customers.",
      based: "100% plant-based. Source of protein. Source of fibre. Gluten-free. Lactose-free.",
      price: 6.97,
      img: ['/assets/img/smoked-ssg.png', '/assets/img/smkssg2.png', '/assets/img/smkssg3.png']},
  ];

  cartItems: Array<string> = [];

  constructor(private persist: PersistenceService) {
    this.cartItems = persist.loadItemsFromStorage();
    console.log("prod service constructor", this.cartItems)
  }

  findProduct(id: string) {
    const prod = this.productList.find(element => element.id == id);
    return prod
  }
}
