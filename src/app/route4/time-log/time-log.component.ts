import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-time-log',
  templateUrl: './time-log.component.html',
  styleUrls: ['./time-log.component.css'],
})
export class TimeLogComponent implements OnInit {
  capturedTimes: any;
  constructor(private timerService: TimerService) {}

  ngOnInit(): void {
    this.timerService.capturedTimes.subscribe((times: any) => {
      this.capturedTimes = [...times];
    });
  }
}
