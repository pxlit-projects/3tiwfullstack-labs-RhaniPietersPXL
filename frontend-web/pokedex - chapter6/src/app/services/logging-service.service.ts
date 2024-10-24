import { Injectable } from '@angular/core';
import {dateTimestampProvider} from "rxjs/internal/scheduler/dateTimestampProvider";

@Injectable({
  providedIn: 'root'
})
export class LoggingServiceService {
  loggings: string[] = [];

  constructor() { }

  log(message: string): void {
    this.loggings.push(message);
  }

  getLoggings(): string[] {
    return this.loggings;
  }
}
