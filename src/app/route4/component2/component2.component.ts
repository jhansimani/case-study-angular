import { Component, Input, OnInit } from '@angular/core';
import { TimerService } from '../../services/timer.service';
@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css'],
})
export class Component2Component implements OnInit {
  @Input() value: any;

  startCounter = 0;
  pauseCounter = 0;
  isStart = false;
  isPause = false;
  time = new Date();
  capturedTimeValues: any[] = [];
  pauseValues: any[] = [];
  constructor(private timerService: TimerService) {}

  ngOnInit(): void {
    this.timerService.pausedAtEmitter.subscribe((values: any) => {
      this.pauseValues = values;
    });
  }
  resetTimer() {
    this.value = '';
    this.startCounter = 0;
    this.pauseCounter = 0;
    this.capturedTimeValues = [];
    this.pauseValues = [];
    this.timerService.timeLimitEmitter.next(this.value);
    this.timerService.startCountEmitter.next(this.startCounter);
    this.timerService.pauseCountEmitter.next(this.pauseCounter);
    this.timerService.capturedTimes.next(this.capturedTimeValues);
    this.timerService.pausedAtEmitter.next(this.pauseValues);
  }
  onchange(event: any) {
    if (event.target.value != undefined || event.target.value != '') {
      this.value = parseInt(event.target.value);
      if (!isNaN(this.value)) {
        this.timerService.timeLimitEmitter.next(this.value);
      }
    }
  }
  startPause() {
    if (this.value) {
      if (!this.isStart) {
        this.isStart = true;
        this.isPause = false;
        this.startCounter++;

        this.timeCaptured(this.isStart);
        this.timerService.isStarted.next(this.isStart);
        this.timerService.isPaused.next(this.isPause);
        this.timerService.startCountEmitter.next(this.startCounter);
      } else {
        this.isPause = true;
        this.isStart = false;
        this.pauseCounter++;
        this.timeCaptured(this.isStart);
        this.timerService.isPaused.next(this.isPause);
        this.timerService.isStarted.next(this.isStart);
        this.timerService.pauseCountEmitter.next(this.pauseCounter);
      }
    }
  }
  timeCaptured(startFlag: boolean) {
    this.time = new Date();
    let key = '';
    if (startFlag) {
      key = 'start';
    } else {
      key = 'start';
    }
    const timeObj = { start: startFlag, time: this.time };
    this.capturedTimeValues.push(timeObj);
    this.timerService.capturedTimes.next(this.capturedTimeValues);
  }
}
