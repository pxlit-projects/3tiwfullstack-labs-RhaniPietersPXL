import {Component, inject, OnInit} from '@angular/core';
import {LoggingService} from "../services/logging.service";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  logService: LoggingService = inject(LoggingService);
  loggings: string[] = [];

  ngOnInit(): void {
    this.logService.log("ProductComponent initialized");
    this.loggings = this.logService.getLoggings();
  }
}
