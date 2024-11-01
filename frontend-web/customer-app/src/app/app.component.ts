import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Customer} from "./shared/models/customer.model";
import {NavbarComponent} from "./core/navbar/navbar.component";
import {CommonModule} from "@angular/common";
import {CustomerListComponent} from "./core/customers/customer-list/customer-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, CustomerListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'customer-app';
  }


