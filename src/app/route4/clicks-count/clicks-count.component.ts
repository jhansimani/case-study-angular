import { Component, OnInit } from '@angular/core';

import { TimerService } from '../timer.service';

@Component({
  selector: 'app-clicks-count',
  templateUrl: './clicks-count.component.html',
  styleUrls: ['./clicks-count.component.css'],
})
export class ClicksCountComponent implements OnInit {
  startCount: number = 0;
  pauseCount: number = 0;
  constructor(private timerService: TimerService) {}

  ngOnInit(): void {
    this.timerService.startCountEmitter.subscribe((count) => {
      this.startCount = count;
    });
    this.timerService.pauseCountEmitter.subscribe((count) => {
      this.pauseCount = count;
    });
  }
}
