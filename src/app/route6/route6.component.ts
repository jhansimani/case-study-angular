import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-route6',
  templateUrl: './route6.component.html',
  styleUrls: ['./route6.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class Route6Component implements OnInit {
  isClicked!: boolean;
  message = '';
  constructor(private el: ElementRef) {}

  ngOnInit(): void {}
  insertAfter(newNode: any, existingNode: any) {
    existingNode?.parentNode.insertBefore(newNode, existingNode.nextSibling);
  }
  scroll(event: any) {
    var element = event.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      if (
        this.el.nativeElement.offsetHeight + this.el.nativeElement.scrollTop >=
          this.el.nativeElement.scrollHeight &&
        event.deltaY > 0
      ) {
        let lastbox = this.el.nativeElement.getElementsByClassName('box');
        let lastboxvalue = lastbox.length - 1;
        for (let i = 0; i < 4; i++) {
          let newDiv = document.createElement('div');
          let button = document.createElement('button');
          lastboxvalue = lastboxvalue + 1;
          button.innerText = 'Button' + ' ' + lastboxvalue;
          button.name = String(lastboxvalue);
          newDiv.className = 'box';
          newDiv.appendChild(button);
          let id = document.getElementById('dynamic-wrapper');
          id?.appendChild(newDiv);
          button.addEventListener('click', this.buttonClicked.bind(this));
        }
      }
    }
  }
  buttonClicked(event: any) {
    this.isClicked = true;
    this.message = `Button in ${event.target.name}'th division is Clicked`;
  }
  close(event: any) {
    this.isClicked = false;
  }
}
