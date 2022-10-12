import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  timeLimitEmitter = new Subject<number>();
  isStarted = new Subject<boolean>();
  isPaused = new Subject<boolean>();
  startCountEmitter = new Subject<number>();
  pauseCountEmitter = new Subject<number>();
  capturedTimes = new Subject();
  pausedAtEmitter = new Subject();
  constructor() {}
}
