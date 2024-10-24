import {Component, inject, OnInit} from '@angular/core';
import {LoggingService} from "../services/logging.service";

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit{
  logService: LoggingService = inject(LoggingService);
  loggings: string[] = [];

  ngOnInit(): void {
    this.logService.log("OrderComponent initialized");
    this.loggings = this.logService.getLoggings();
  }
}
