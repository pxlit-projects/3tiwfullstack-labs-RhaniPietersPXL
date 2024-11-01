import {Component, inject} from '@angular/core';
import {AsyncPipe, CurrencyPipe} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {Product} from "../../../shared/models/product.model";
import {ProductService} from "../../../shared/services/product.service";

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CurrencyPipe, AsyncPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  productService: ProductService = inject(ProductService);
  route: ActivatedRoute = inject(ActivatedRoute);
  id: number = Number(this.route.snapshot.params['id']);
  product$: Observable<Product> = this.productService.getProduct(this.id);
}
