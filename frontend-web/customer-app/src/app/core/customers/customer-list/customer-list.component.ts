import {Component, inject, OnInit} from '@angular/core';
import {CustomerItemComponent} from "../customer-item/customer-item.component";
import {FilterComponent} from "../filter/filter.component";
import {Customer} from "../../../shared/models/customer.model";
import {Filter} from "../../../shared/models/filter.model";
import {AddCustomerComponent} from "../add-customer/add-customer.component";
import {CustomerService} from "../../../shared/services/customer.service";

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CustomerItemComponent, FilterComponent, AddCustomerComponent],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit {
  customerService: CustomerService = inject(CustomerService);
  filteredData!: Customer[];

  ngOnInit(): void {
    this.fetchData();
  }

  handleFilter(filter: Filter) {
    this.customerService.filterCustomers(filter).subscribe({
      next: customers => this.filteredData = customers
    });
  }

/*  processAdd(customer: Customer) {
    this.customerService.addCustomer(customer).subscribe({
      next: () => {
        this.fetchData();
      }
    });

    html = <app-add-customer (addCustomer)="processAdd($event)"></app-add-customer>
  }*/

  fetchData(): void {
    this.customerService.getCustomers().subscribe({
      next: customers => {
        this.filteredData = customers;
      }
    });
  }
}
