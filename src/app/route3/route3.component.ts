import { Component, OnInit, ViewChild } from '@angular/core';
import { CountDownTimerComponent } from './count-down-timer/count-down-timer.component';

@Component({
  selector: 'app-route3',
  templateUrl: './route3.component.html',
  styleUrls: ['./route3.component.css'],
})
export class Route3Component implements OnInit {
  @ViewChild('timer')
  private countDownTimerComponent!: CountDownTimerComponent;
  timeLimit = 0;
  isStarted!: boolean;
  pauseValues: any;
  resetted = false;
  pauseCount = 0;
  startCount = 0;
  capturedValues!: any[];
  constructor() {}

  ngOnInit(): void {}
  limitValue(timeLimit: any) {
    this.timeLimit = timeLimit;
  }
  isStart(event: any) {
    this.isStarted = event;
    if (this.isStarted) {
      this.countDownTimerComponent.start();
    } else {
      this.countDownTimerComponent.pause();
    }
  }
  pausedAt(event: any) {
    this.pauseValues = [...event];
  }
  reset(event: any) {
    this.resetted = event;
    this.countDownTimerComponent.reset();
  }
  noOfPauses(event: any) {
    this.pauseCount = event;
  }
  noOfStarts(event: any) {
    this.startCount = event;
  }
  capturedTimeValues(event: any) {
    this.capturedValues = [...event];
  }
}
