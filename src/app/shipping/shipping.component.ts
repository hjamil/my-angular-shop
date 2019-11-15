import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { CartService } from '../cart.service';

import { ShippingService } from '../shipping.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts;

  constructor(
    private cartService: CartService,
    private shippingService: ShippingService
  ) { }

  ngOnInit() {
    // this.shippingCosts = this.cartService.getShippingPrices();
    this.shippingCosts = this.shippingService.GetShippingOptions();
  }

}