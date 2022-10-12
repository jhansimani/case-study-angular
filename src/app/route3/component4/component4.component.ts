import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css'],
})
export class Component4Component implements OnInit {
  @Input() startCount: number = 0;
  @Input() pauseCount: number = 0;
  constructor() {}

  ngOnInit(): void {}
}
