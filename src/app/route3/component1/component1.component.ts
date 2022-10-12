import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css'],
})
export class Component1Component implements OnInit {
  @Input() limit: any;
  @Input() isStarted = false;
  @Input() isResetted = false;
  @Input() resetFlag = false;
  @Output() pausedAt = new EventEmitter();
  @Output() resettedEmitter = new EventEmitter();
  pauseValues: string[] = [];
  intervalId = 0;
  constructor() {}
  timeLimitRecived: any;
  ngOnInit(): void {
    this.timeLimitRecived = this.limit;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.timeLimitRecived = this.limit;
  }
  pause() {
    this.clearTimer();
    const pauseValue = 'paused at' + this.limit;
    this.pauseValues.push(pauseValue);
    this.pausedAt.emit(this.pauseValues);
  }
  clearTimer() {
    clearInterval(this.intervalId);
  }
  start() {
    this.intervalId = window.setInterval(() => {
      this.limit -= 1;
      if (this.limit === 0) {
      } else {
        if (this.limit < 0) {
          this.limit = 0;
          this.clearTimer();
        }
      }
    }, 1000);
  }
  reset() {
    this.clearTimer();
    this.limit = 0;
    this.pauseValues = [];
    this.pausedAt.emit(this.pauseValues);
    this.resettedEmitter.emit(true);
  }
}
