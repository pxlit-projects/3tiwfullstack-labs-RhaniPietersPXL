import {Component, inject, OnInit} from '@angular/core';
import {LoggingServiceService} from "../services/logging-service.service";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  logService: LoggingServiceService = inject(LoggingServiceService);
  loggings: string[] = [];

  ngOnInit(): void {
    this.logService.log("ProductComponent initialized");
    this.loggings = this.logService.getLoggings();
  }
}
