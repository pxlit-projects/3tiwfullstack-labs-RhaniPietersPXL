import {Component, inject, OnInit} from '@angular/core';
import {ProductService} from "../../shared/services/product.service";
import {Product} from "../../shared/models/product.model";
import {ProductItemComponent} from "../products/product-item/product-item.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ProductItemComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  productService: ProductService = inject(ProductService);
  products! : Product[];

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

}
