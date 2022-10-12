import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortPipe } from './sort.pipe';
import { FormatdatePipe } from './formatdate.pipe';
import { LoaderComponent } from './loader/loader.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [SortPipe, FormatdatePipe, LoaderComponent, ModalComponent],
  imports: [CommonModule],
  exports: [SortPipe, FormatdatePipe, LoaderComponent, ModalComponent],
})
export class SharedModule {}
