import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-clicks',
  templateUrl: './count-clicks.component.html',
  styleUrls: ['./count-clicks.component.css'],
})
export class CountClicksComponent implements OnInit {
  @Input() startCount: number = 0;
  @Input() pauseCount: number = 0;
  constructor() {}

  ngOnInit(): void {}
}
