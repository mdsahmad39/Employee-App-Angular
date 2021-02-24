import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: any;

  constructor() {
    this.products = [
      {
        productId: 1001, productName: 'MOBILE', price: 19999.99, imagePath: 'assets/images/1001.jpeg',
        description: 'No cost EMI from ₹1,499. Standard EMI also availableView Plans'
      },

      {
        productId: 1002, productName: 'MOBILE', imagePath: 'assets/images/1002.jpeg',
        description: 'Nokia A6 Pro Brand', price: 13499.99
      },

      {
        productId: 1003, productName: 'MOBILE', imagePath: 'assets/images/1003.jpeg',
        description: 'Samsung J7 Pro Second Edition', price: 19999.99
      },

      {
        productId: 1004, productName: 'MOBILE', price: 13499.99, imagePath: 'assets/images/1004.jpeg',
        description: 'Get upto ₹11400 off with Exchange Special PriceGet extra ₹2000 off '
      },

      {
        productId: 1005, productName: 'MOBILE', price: 19999.99, imagePath: 'assets/images/1005.jpeg',
        description: 'Samsung J7 Pro Second Edition'
      },

      {
        productId: 1006, productName: 'MOBILE', price: 13499.99, imagePath: 'assets/images/1006.jpeg',
        description: 'Nokia A6 Pro Brand'
      }
    ];
  }

  ngOnInit(): void {
  }

  addToCart(product: any): void {
  }

}
