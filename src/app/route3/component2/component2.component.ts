import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Component1Component } from '../component1/component1.component';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css'],
})
export class Component2Component implements OnInit {
  timerForm: any;
  @Input() value: any;
  @Output() limitValue = new EventEmitter();
  @Output() isStarted = new EventEmitter();
  @Output() isResetted = new EventEmitter();
  @Output() noOfStarts = new EventEmitter();
  @Output() noOfPauses = new EventEmitter();
  @Output() capturedTimes = new EventEmitter();

  @Input() reset = false;
  @Input() pauseValues: any;
  @ViewChild('timer') private CountDownTimerComponent!: Component1Component;

  isStart = false;
  isReset = false;
  time = new Date();
  capturedTimeValues: any[] = [];

  startCounter = 0;
  pauseCounter = 0;

  constructor() {}

  ngOnInit(): void {}
  onchange(event: any) {
    if (event.target.value != undefined || event.target.value != '') {
      this.value = parseInt(event.target.value);
      if (!isNaN(this.value)) {
        this.limitValue.emit(this.value);
      }
    }
  }

  startPause() {
    if (this.value) {
      if (!this.isStart) {
        this.isStart = true;
        this.isReset = false;
        this.startCounter++;
        this.timeCaptured(this.isStart);
        this.noOfStarts.emit(this.startCounter);
      } else {
        this.isStart = false;
        this.isReset = false;
        this.pauseCounter++;
        this.noOfPauses.emit(this.pauseCounter);
        this.timeCaptured(this.isStart);
      }
      this.isStarted.emit(this.isStart);
    }
  }
  resetTimer() {
    this.isStart = false;
    this.isReset = true;
    this.capturedTimeValues = [];
    this.startCounter = 0;
    this.pauseCounter = 0;
    this.value = '';
    this.isResetted.emit(this.isReset);
    this.capturedTimes.emit(this.capturedTimeValues);
    this.noOfStarts.emit(this.startCounter);
    this.noOfPauses.emit(this.pauseCounter);
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
    this.capturedTimes.emit(this.capturedTimeValues);
  }
}
