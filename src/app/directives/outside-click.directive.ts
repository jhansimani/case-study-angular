import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';
import { fromEvent, take } from 'rxjs';

@Directive({
  selector: '[appOutsideClick]',
})
export class OutsideClickDirective {
  clicked = false;

  @Output() appOutsideClick = new EventEmitter();

  constructor(private elRef: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  onClick(target: any) {
    if (!this.clicked) {
      return;
    }

    if (!this.elRef.nativeElement.contains(target)) {
      this.appOutsideClick.emit();
    }
  }

  ngOnInit() {
    fromEvent(document, 'click', { capture: true })
      .pipe(take(1))
      .subscribe(() => (this.clicked = true));
  }
}
