import { Injectable } from '@angular/core';
import {Product} from "../models/product.model";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {id: 1, name: 'Product 1', price: 100, description: 'lala'},
    {id: 2, name: 'Product 2', price: 200, description: 'lala'},
    {id: 3, name: 'Product 3', price: 300, description: 'buh'},
    {id: 4, name: 'Product 4', price: 400, description: 'wie weet'},
    {id: 5, name: 'Product 5', price: 500, description: 'god weet'}
  ];

  getProduct(id: number): Observable<Product> {
    return of(this.products.find(product => product.id === id)!);
  }

  getProducts(): Product[] {
    return this.products;
  }
}
