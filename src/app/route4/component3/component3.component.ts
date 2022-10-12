import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css'],
})
export class Component3Component implements OnInit {
  capturedTimes: any;
  constructor(private timerService: TimerService) {}

  ngOnInit(): void {
    this.timerService.capturedTimes.subscribe((times: any) => {
      this.capturedTimes = [...times];
    });
  }
}
