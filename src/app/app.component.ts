import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'caseStudy';
  constructor(private el: ElementRef) {}

  menuClicked() {
    const header = this.el.nativeElement.querySelector('.header');
    header.classList.toggle('nav-open');
  }
}
