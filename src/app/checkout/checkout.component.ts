import { Client } from './../model/client';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersistenceService } from '../persistence.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  _CHECKED: boolean =false;
  form: FormGroup;
  client: Client = new Client("", "", "");

  constructor( private persist: PersistenceService) {
    this.form = new FormGroup({
      'name': new FormControl(this.client.name, [Validators.required, Validators.minLength(5)]),
      'address': new FormControl(this.client.phone, [Validators.required, Validators.minLength(10)]),
      'phone': new FormControl(this.client.phone)
    })
  }

  ngOnInit(): void {
  }

  submit(){
    const name = this.form.get('name')?.value;
    const address = this.form.get('address')?.value;
    const phone = this.form.get('phone')?.value;

    const form = new Client(name, address, phone);
    console.log(form)
    this.persist.clearCart()
  }

  get name() { return this.form.get('name')}
  get address() { return this.form.get('address')}
  get phone() { return this.form.get('phone')}

}
