import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutsideClickDirective } from './outside-click.directive';
import { DigitOnlyDirective } from './digit-only.directive';

@NgModule({
  declarations: [OutsideClickDirective, DigitOnlyDirective],
  imports: [CommonModule],
  exports: [OutsideClickDirective, DigitOnlyDirective],
})
export class DirectivesModule {}
