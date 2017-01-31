import {Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'products',
  template: require('./products.html')
})
export class ProductsComponent {
  public products: Product[] = [
    {id: 1, name: 'Product 1'},
    {id: 2, name: 'Product 2'},
    {id: 3, name: 'Product 3'}
  ];
}
