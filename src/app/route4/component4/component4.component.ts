import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css'],
})
export class Component4Component implements OnInit {
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
