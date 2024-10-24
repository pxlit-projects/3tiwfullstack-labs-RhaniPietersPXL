import {Component, inject, OnInit} from '@angular/core';
import {LoggingServiceService} from "../services/logging-service.service";

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit{
  logService: LoggingServiceService = inject(LoggingServiceService);
  loggings: string[] = [];

  ngOnInit(): void {
    this.logService.log("OrderComponent initialized");
    this.loggings = this.logService.getLoggings();
  }
}
