import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-log',
  templateUrl: './time-log.component.html',
  styleUrls: ['./time-log.component.css'],
})
export class TimeLogComponent implements OnInit {
  @Input() reset = false;
  @Input() captuedTimes: any;
  constructor() {}

  ngOnInit(): void {}
}
