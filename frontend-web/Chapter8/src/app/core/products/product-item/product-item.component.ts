import {Component, Input} from '@angular/core';
import {Product} from "../../../shared/models/product.model";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [RouterLink, CurrencyPipe, RouterLinkActive],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product!: Product;

}
