import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-count-down-timer',
  templateUrl: './count-down-timer.component.html',
  styleUrls: ['./count-down-timer.component.css'],
})
export class CountDownTimerComponent implements OnInit, OnChanges {
  @Input() limit = 0;
  start = false;
  pause = false;
  intervalId!: number;
  pauseValues: string[] = [];
  constructor(private timerService: TimerService) {}

  ngOnInit(): void {
    this.timerService.timeLimitEmitter.subscribe((limit) => {
      this.limit = limit;
    });

    this.timerService.isStarted.subscribe((isStart: boolean) => {
      this.start = isStart;
      if (this.start) {
        this.intervalId = window.setInterval(() => {
          this.limit -= 1;
          if (this.limit === 0) {
            return;
          } else {
            if (this.limit < 0) {
              this.limit = 0;
              return;
            }
          }
        }, 1000);
      }
    });
    this.timerService.isPaused.subscribe((isPause: boolean) => {
      this.pause = isPause;
      if (this.pause) {
        this.clearTimer();
        const pauseValue = 'paused at' + ' ' + this.limit;
        this.pauseValues.push(pauseValue);
        this.timerService.pausedAtEmitter.next(this.pauseValues);
      }
    });
  }

  clearTimer() {
    clearInterval(this.intervalId);
  }
  ngOnChanges(changes: SimpleChanges): void {}
}
